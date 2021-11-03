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
  setType: React.Dispatch<React.SetStateAction<string>>,
  setIsOpenChats: React.Dispatch<React.SetStateAction<boolean>>,
  setIsOpenChat: React.Dispatch<React.SetStateAction<boolean>>,
  setIsEmojji: React.Dispatch<React.SetStateAction<boolean>>,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
  setLoadChats: React.Dispatch<React.SetStateAction<boolean>>,
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
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
