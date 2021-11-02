import React, { useState } from "react";

const UIContext = React.createContext({});

export const UIContextProvider = (props) => {
  const [type, setType] = useState("");
  const [isOpenChats, setIsOpenChats] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isEmojii, setIsEmojji] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCreateChat, setIsCreateChat] = useState(false);
  const [loadChats, setLoadChats] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const addIsEmojii = (isEmojii) => {
    setIsEmojji(isEmojii);
  };

  const setIsOpenCreateChat = () => {
    setIsCreateChat((previousState) => !previousState);
  };

  const setIsLoadChats = (val) => {
    setLoadChats(val);
  };

  return (
    <UIContext.Provider
      value={{
        type,
        setType,
        isOpenChats,
        setIsOpenChats,
        isOpenChat,
        setIsOpenChat,
        isEmojii,
        setIsEmojji: addIsEmojii,
        isEdit,
        setIsEdit,
        isOpenCreateChat: isCreateChat,
        setIsOpenCreateChat,
        loadChats,
        setLoadChats: setIsLoadChats,
        isAuth,
        setIsAuth
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
