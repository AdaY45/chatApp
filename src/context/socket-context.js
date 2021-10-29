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
      console.log("Socket message: " + data.date);
      chat.addMessages((previousState) => [
        ...previousState,
        {
          ...data,
          type: data.email === user.email ? "user" : "member",
          status: "read",
        },
      ]);
      user.setUserMassage({
        room: data.room,
        text: data.text,
        date: data.date,
      });
    });

    socket.on("client-delete-message", function (data) {
      console.log("Socket delete message: " + data);
      chat.addMessages((previousState) =>
        previousState.filter((el) => el.id !== data)
      );
    });

    socket.on("client-update-message", function (data) {
      console.log("Socket update message: " + data);
      chat.addMessages((previousState) =>
        previousState.map((el) =>
          el.id === user.messageId ? { ...el, text: data.text } : el
        )
      );
    });

    socket.on("client-create-room", function (data) {
      console.log("Socket create room: " + data.message);
      ui.setLoadChats(true);
    });

    socket.on("server-create-room", function (data) {
      console.log("Socket create room: " + data);
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
    console.log("socket: ", { room: id, message, file })
    socket.emit("server-send-message", { room: id, message, file});
  };

  const updateMessage = (id, text) => {
    socket.emit("server-update-message", { id, text });
  };

  const deleteMessage = (id) => {
    socket.emit("server-delete-message", { id });
  };

  const createChat = (users, photo, name) => {
    console.log("create",{ users, photo, name })
    socket.emit("server-create-room", { users, photo: "fsdfsdf.jpeg", name });
  };

  const createPersonal = (users) => {
    socket.emit("server-create-room", { users });
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
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
