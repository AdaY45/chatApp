import React, { useState } from "react";

type UIContextObj = {
  type: string,
  isOpenChats: boolean,
  isOpenChat: boolean,
  isEmojii: boolean,
  isEdit: boolean,
  isOpenCreateChat: boolean,
  loadChats: boolean,
  isAuth: boolean,
  setType: (type: string) => void,
  setIsOpenChats: (isOpenChats: boolean) => void,
  setIsOpenChat: (isOpenChat: boolean) => void,
  setIsEmojji: (isEmojji: boolean) => void,
  setIsEdit: (isEdit: boolean) => void,
  setLoadChats: (loadChats: boolean) => void,
  setIsAuth: (isAuth: boolean) => void,
  setIsOpenCreateChat: () => void
}

const UIContext = React.createContext<UIContextObj>({} as UIContextObj);

export const UIContextProvider: React.FC = (props) => {
  const [type, setType] = useState<string>("");
  const [isOpenChats, setIsOpenChats] = useState<boolean>(false);
  const [isOpenChat, setIsOpenChat] = useState<boolean>(false);
  const [isEmojii, setIsEmojji] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isCreateChat, setIsCreateChat] = useState<boolean>(false);
  const [loadChats, setLoadChats] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const setIsOpenCreateChat = () => {
    setIsCreateChat((previousState) => !previousState);
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
        setIsEmojji,
        isEdit,
        setIsEdit,
        isOpenCreateChat: isCreateChat,
        setIsOpenCreateChat,
        loadChats,
        setLoadChats,
        isAuth,
        setIsAuth
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
