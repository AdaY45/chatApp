import React, { useState } from "react";

const UserContext = React.createContext({
  user: {},
  email: "",
  token: "",
  chat: {},
  image: "",
  message: null,
  messageId: null,
  startMessages: 0,
  setUserToken: (token) => {},
  setUserInfo: (info) => {},
  setChat: (chat) => {},
  setImage: (image) => {},
  setUserMassage: (message) => {},
  setUserEmail: (email) => {},
  setMessageId: (id) => {},
  setStartM: (start) => {},
  reduceCountMessages: () => {}
});

export const UserContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [chat, setChat] = useState({});
  const [image, setImage] = useState("");
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [messageId, setMessageId] = useState(null);
  const [startMessages, setStartMessages] = useState(0);

  const setUserToken = (token) => {
    setToken(token);
  };

  const setUserInfo = (info) => {
    setUser(info);
  };

  const addChat = (chat) => {
    setChat(chat);
  };

  const addImage = (image) => {
    setImage(image);
  };

  const setUserMassage = (message) => {
    setMessage(message);
  };

  const setUserEmail = (email) => {
    setEmail(email);
  };

  const addMessageId = (id) => {
    setMessageId(id);
  };

  const setStartM = (start) => {
    if (start > 0) {
      setStartMessages(start);
    } else {
      setStartMessages(0);
    }
  };

  const reduceCountMessages = () => {
    setStartMessages((previousState) => previousState - 10 > 0 ? previousState - 10 : 0);
  };

  return (
    <UserContext.Provider
      value={{
        token: token,
        setUserToken: setUserToken,
        user: user,
        setUserInfo: setUserInfo,
        chat: chat,
        setChat: addChat,
        image: image,
        setImage: addImage,
        message: message,
        setUserMassage: setUserMassage,
        email: email,
        setUserEmail: setUserEmail,
        messageId: messageId,
        setMessageId: addMessageId,
        startMessages: startMessages,
        setStartM: setStartM,
        reduceCountMessages: reduceCountMessages,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
