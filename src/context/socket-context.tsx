import { useEffect, useContext, useState, createContext } from "react";
import { io } from "socket.io-client";
import UserContext from "./user-context";
import ChatContext from "./chat-context";
import UIContext from "./ui-context";
import {IMessage, IUploadingFile} from "../interfaces/chat";

type SocketContextoObj = {
  sendMessage: (id: string, message: string, file: IUploadingFile | undefined) => void;
  updateMessage: (id: string, text: string) => void;
  deleteMessage: (id: string) => void;
  createChat: (users: Array<string>, photo: IUploadingFile | undefined, name: string) => void;
  createPersonal: (users: Array<string>) => void;
  readMessages: (id: string, messages: IMessage[]) => void;
  startWriting: (id: string) => void;
  stopWriting: (id: string) => void;
};

const SocketContext = createContext<SocketContextoObj>({} as SocketContextoObj);

export const SocketContextProvider: React.FC = (props) => {
  const user = useContext(UserContext);
  const chat = useContext(ChatContext);
  const ui = useContext(UIContext);
  const url: string = "http://localhost:3001/";

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

  const sendMessage = (id: string, message: string, file: IUploadingFile | undefined) => {
    console.log("socket: ", { room: id, message, file });
    socket.emit("server-send-message", { room: id, message, file });
  };

  const updateMessage = (id: string, text: string) => {
    socket.emit("server-update-message", { id, text });
  };

  const deleteMessage = (id: string) => {
    socket.emit("server-delete-message", { id });
  };

  const createChat = (users: Array<string>, photo: IUploadingFile | undefined, name: string) => {
    console.log("create", { users, photo, name });
    socket.emit("server-create-room", { users, photo, name });
  };

  const createPersonal = (users: Array<string>) => {
    socket.emit("server-create-room", { users });
  };

  const readMessages = (id: string, messages: IMessage[]) => {
    socket.emit("server-read-message", { id, messages });
  };

  const startWriting = (id: string) => {
    console.log("server-start-writing", id);
    socket.emit("server-start-writing", { id });
  };

  const stopWriting = (id: string) => {
    socket.emit("server-stop-writing", { id });
  };

  return (
    <SocketContext.Provider
      value={{
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
