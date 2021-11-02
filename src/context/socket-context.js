import { useEffect, useContext, useState, createContext } from "react";
import UserContext from "../context/user-context";
import ChatContext from "./chat-context";
import UIContext from "./ui-context";
import { io } from "socket.io-client";

const SocketContext = createContext({});

export const SocketContextProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const user = useContext(UserContext);
  const chat = useContext(ChatContext);
  const ui = useContext(UIContext);
  const url = "http://localhost:3001/";

  const socket = io(url, {
    auth: {
      token: user.token,
    },
  });

  useEffect(() => {
    socket.on("client-connection", function (data) {
      console.log("Socket" + data.email);
    });

    socket.on("client-message", function (data) {
      console.log("Socket message file: " + data.file);
      chat.addMessages((previousState) => [
        ...previousState,
        {
          ...data,
          type: data.email === user.email ? "user" : "member",
          status: "read",
        },
      ]);
      chat.addChats((previousState) =>
        previousState.map((el) => {
          if (el.id === data.room) {
            return { ...el, file: data.file };
          } else {
            return el;
          }
        })
      );
      user.setMessage({
        room: data.room,
        text: data.text,
        date: data.date,
        file: data.file,
      });
    });

    socket.on("client-delete-message", function (data) {
      console.log("Socket delete message: " + data);
      user.setMessage(null);
      chat.addMessages((previousState) =>
        previousState.filter((el) => el.id !== data)
      );
    });

    socket.on("client-update-message", function (data) {
      console.log("Socket update message: " + data);
      user.setMessage({ ...data, room: user.chat.id, date: null });
      chat.addMessages((previousState) =>
        previousState.map((el) =>
          el.id === user.messageId ? { ...el, text: data.text } : el
        )
      );
    });

    socket.on("client-join", function (data) {
      console.log("Client join: " + data);
    });

    socket.on("client-leave", function (data) {
      console.log("Client leave: " + data);
    });

    socket.on("client-create-room", function (data) {
      console.log("Socket create room: " + data.message);
      ui.setLoadChats(true);
    });

    socket.on("client-error", function (data) {
      console.log("Client error: " + data);
    });

    socket.on("client-start-writing", function (data) {
      console.log("client-start-writing: " + data);
      chat.addChats((previousState) =>
        previousState.map((el) => {
          if (el.id === data.room && user.user.id !== data.user) {
            return { ...el, status: "...writing" };
          } else {
            return el;
          }
        })
      );

      user.setChat((previousState) => {
        if (user.user.id !== data.user) {
          return { ...previousState, status: "...writing" };
        } else {
          return previousState;
        }
      });
    });

    socket.on("client-stop-writing", function (data) {
      console.log("client-stop-writing: " + data);
      chat.addChats((previousState) =>
        previousState.map((el) => {
          if (el.id === data.room && user.user.id !== data.user) {
            return { ...el, status: "dispatch" };
          } else {
            return el;
          }
        })
      );

      user.setChat((previousState) => {
        if (user.user.id !== data.user) {
          return { ...previousState, status: "dispatch" };
        } else {
          return previousState;
        }
      });
    });

    socket.on("client-read-message", function (data) {
      console.log("client-read-message: " + data);
      chat.addChats((previousState) =>
        previousState.map((el) => {
          if (el.id === data.room) {
            return { ...el, noChecked: 0 };
          } else {
            return el;
          }
        })
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, user, chat]);

  const addMessages = (messages) => {
    setMessages(messages);
  };

  const addChats = (chats) => {
    setChats(chats);
  };

  const sendMessage = (id, message, file) => {
    console.log("socket: ", { room: id, message, file });
    socket.emit("server-send-message", { room: id, message, file });
  };

  const updateMessage = (id, text) => {
    socket.emit("server-update-message", { id, text });
  };

  const deleteMessage = (id) => {
    socket.emit("server-delete-message", { id });
  };

  const createChat = (users, photo, name) => {
    console.log("create", { users, photo, name });
    socket.emit("server-create-room", { users, photo, name });
  };

  const createPersonal = (users) => {
    socket.emit("server-create-room", { users });
  };

  const readMessages = (id, messages) => {
    socket.emit("server-read-message", { id, messages });
  };

  const startWriting = (id) => {
    console.log("server-start-writing", id);
    socket.emit("server-start-writing", { id });
  };

  const stopWriting = (id) => {
    socket.emit("server-stop-writing", { id });
  };

  return (
    <SocketContext.Provider
      value={{
        messages,
        chats,
        addMessages,
        addChats,
        sendMessage,
        updateMessage,
        deleteMessage,
        createChat,
        createPersonal,
        readMessages,
        startWriting,
        stopWriting,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
