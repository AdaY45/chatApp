import { useEffect, useContext } from "react";
import UserContext from "../context/user-context";
import { io } from "socket.io-client";

const useSocket = (onSetMessages) => {
  const user = useContext(UserContext);
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
      console.log("Socket message: " + data.text);
      onSetMessages((previousState) => [
        ...previousState,
        {
          ...data,
          type: "user",
          status: "read",
        },
      ]);
      user.setUserMassage(data.text);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket, onSetMessages, user]);

  const sendMessage = (id, text) => {
    socket.emit("server-send-message", { room: id, message: text });
  };

  return sendMessage;
};

export default useSocket;
