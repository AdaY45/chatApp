// import { useEffect, useContext, useState } from "react";
// import UserContext from "../context/user-context";
// import { io } from "socket.io-client";

// const useSocket = (onSetMessages, onSetChats) => {
//   const user = useContext(UserContext);
//   const url = "http://localhost:3001/";

//   const socket = io(url, {
//     auth: {
//       token: user.token,
//     },
//   });

//   useEffect(() => {
//     socket.on("client-connection", function (data) {
//       console.log("Socket" + data.email);
//     });

//     socket.on("client-message", function (data) {
//       console.log("Socket message: " + data.text);
//       onSetMessages((previousState) => [
//         ...previousState,
//         {
//           ...data,
//           type: data.email === user.email ? "user" : "member",
//           status: "read",
//         },
//       ]);
//       user.setUserMassage({
//         room: data.room,
//         text: data.text,
//         date: data.date,
//       });
//     });

//     socket.on("client-delete-message", function (data) {
//       console.log("Socket delete message: " + data);
//       onSetMessages((previousState) =>
//         previousState.filter((el) => el.id !== data)
//       );
//     });

//     socket.on("client-update-message", function (data) {
//       console.log("Socket update message: " + data);
//       onSetMessages((previousState) =>
//         previousState.map((el) =>
//           el.id === user.messageId ? { ...el, text: data.text } : el
//         )
//       );
//     });

//     socket.on("client-create-room", function (data) {
//       console.log("Socket create room: " + data);
//       onSetChats(previousState => [data, ...previousState]);
//       // onSetMessages((previousState) =>
//       //   previousState.map((el) =>
//       //     el.id === user.messageId ? { ...el, text: data.text } : el
//       //   )
//       // );
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [socket, onSetMessages, user]);

//   const sendMessage = (id, text) => {
//     socket.emit("server-send-message", { room: id, message: text });
//   };

//   const updateMessage = (id, text) => {
//     socket.emit("server-update-message", { id, text });
//   };

//   const deleteMessage = (id) => {
//     socket.emit("server-delete-message", { id });
//   };

//   const createChat = (users, photo, name) => {
//     socket.emit("server-create-room", {users, photo, name});
//   }

//   const createPersonal = (users) => {
//     socket.emit("server-create-room", {users});
//   }

//   return { sendMessage, updateMessage, deleteMessage, createChat, createPersonal };
// };

// export default useSocket;
