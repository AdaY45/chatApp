import React, { useState } from "react";

const UIContext = React.createContext({
  type: "",
  isOpenChats: false,
  isOpenChat: false,
  isEmojii: false,
  setType: (type) => {},
  setIsOpenChats: (isOpenChats) => {},
  setIsOpenChat: (isOpenChat) => {},
  setIsEmojji: (isEmojii) => {},
});

export const UIContextProvider = (props) => {
  const [type, setType] = useState("");
  const [isOpenChats, setIsOpenChats] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isEmojii, setIsEmojji] = useState(false);

  const setTypeForAuth = (type) => {
    setType(type);
  };

  const setOpenChats = (type) => {
    setIsOpenChats(type);
  };

  const setOpenChat = (type) => {
    setIsOpenChat(type);
  };

  const addIsEmojii = (isEmojii) => {
    setIsEmojji(isEmojii);
  };

  return (
    <UIContext.Provider
      value={{
        type: type,
        setType: setTypeForAuth,
        isOpenChats: isOpenChats,
        setIsOpenChats: setOpenChats,
        isOpenChat: isOpenChat,
        setIsOpenChat: setOpenChat,
        isEmojii: isEmojii,
        setIsEmojji: addIsEmojii
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
