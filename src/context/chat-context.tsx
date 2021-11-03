import React, { useContext, useState, createContext } from "react";
import UserContext from "./user-context";
import useHttp from "../hooks/use-http";
import {IMessage, IChat} from "../interfaces/chat";

type ChatContextObj = {
  messages: IMessage[],
  chats: IChat[],
  start: number,
  addMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
  addChats: React.Dispatch<React.SetStateAction<IChat[]>>,
  getChats: (setError: Function) => void,
  getMessagesCount: () => Promise<number>,
  getMessages: (id: string, start: number, amount: number, setError: Function) => void,
  setStartMessages: (start: number) => void,
  reduceCountMessages: () => void,
}

const ChatContext = createContext<ChatContextObj>({} as ChatContextObj);

export const ChatContextProvider: React.FC = (props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [chats, setChats] = useState<IChat[]>([]);
  const [start, setStart] = useState<number>(0);
  const user = useContext(UserContext);
  const { error, sendRequest } = useHttp();

  const getChats = async (setError: Function) => {
    const response: IChat[] = await sendRequest({
      url: `${process.env.REACT_APP_URL}chat-list/0/0`,
      headers: {
        Authorization: user.token,
      },
    });
    if (error) {
      setError(error);
    }
    setChats(response.length > 1 ? response.reverse() : response);
  };

  const getMessagesCount = async () => {
    const count: number = await sendRequest({
      url: `${process.env.REACT_APP_URL}chat-room/messages-count/${user.chat.id}`,
      headers: {
        Authorization: user.token,
      },
    });

    return count;
  };

  const getMessages = async (id: string, start: number, amount: number, setError: Function) => {
    const response: IMessage[] = await sendRequest({
      url: `${process.env.REACT_APP_URL}chat-room/${id}/${start}/${amount}`,
      headers: {
        Authorization: user.token,
      },
    });

    if (error) {
      setError(error);
    }
    if (!messages[0] || user.chat.id !== messages[0].room) {
      setMessages(
        response.map((el: IMessage) => {
          return { ...el, room: user.chat.id };
        })
      );
    } else {
      setMessages((previousState) =>
        response
          .map((el: IMessage) => {
            return { ...el, room: user.chat.id };
          })
          .concat(previousState)
      );
    }
  };

  const setStartMessages = (start: number) => {
    if (start > 0) {
      setStart(start);
    } else {
      setStart(0);
    }
  };

  const reduceCountMessages = () => {
    setStart((previousState) =>
      previousState - 10 > 0 ? previousState - 10 : 0
    );
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        chats,
        start,
        addMessages: setMessages,
        addChats: setChats,
        getChats,
        getMessagesCount,
        getMessages,
        setStartMessages,
        reduceCountMessages,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
