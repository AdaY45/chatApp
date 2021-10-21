import React, { useState } from "react";

const UIContext = React.createContext({
  type: "",
  isOpenChats: false,
  isOpenChat: false,
  setType: (type) => {},
  setIsOpenChats: (isOpenChats) => {},
  setIsOpenChat: (isOpenChat) => {},
});

export const UIContextProvider = (props) => {
  const [type, setType] = useState("");
  const [isOpenChats, setIsOpenChats] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);

  const setTypeForAuth = (type) => {
    setType(type);
  };

  const setOpenChats = (type) => {
    setIsOpenChats(type);
  };

  const setOpenChat = (type) => {
    setIsOpenChat(type);
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
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
