import React, { useState } from "react";

const ChatContext = React.createContext({
  chatId: "",
  setId: (id) => {},
});

export const ChatContextProvider = (props) => {
  const [chatId, setChatId] = useState("");

  const setId = (id) => {
    setChatId(id);
  };

  return (
    <ChatContext.Provider
      value={{
        chatId: chatId,
        setId: setId,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
