import React, { useState } from "react";

const UserContext = React.createContext({
  user: {},
  token: "",
  chat: {},
  image: "",
  message: null,
  setUserToken: (token) => {},
  setUserInfo: (info) => {},
  setChat: (chat) => {},
  setImage: (image) => {},
  setUserMassage: (message) => {}
});

export const UserContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [chat, setChat] = useState({});
  const [image, setImage] = useState("");
  const [message, setMessage] = useState(null);

  const setUserToken = (token) => {
    setToken(token);
  };

  const setUserInfo = (info) => {
    setUser(info);
  }

  const addChat = (chat) => {
    setChat(chat);
  }

  const addImage = (image) => {
    setImage(image);
  }

  const setUserMassage = (message) => {
    setMessage(message);
  }

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
        setUserMassage: setUserMassage
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
