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

  const setEdit = (isEdit) => {
    setIsEdit(isEdit);
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
        setType: setTypeForAuth,
        isOpenChats,
        setIsOpenChats: setOpenChats,
        isOpenChat,
        setIsOpenChat: setOpenChat,
        isEmojii,
        setIsEmojji: addIsEmojii,
        isEdit: isEdit,
        setIsEdit: setEdit,
        isOpenCreateChat: isCreateChat,
        setIsOpenCreateChat,
        loadChats,
        setLoadChats: setIsLoadChats,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
