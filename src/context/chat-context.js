import { useContext, useState, createContext } from "react";
import UserContext from "../context/user-context";
import useHttp from "../hooks/use-http";

const URL = "http://localhost:3000/";

const ChatContext = createContext({});

export const ChatContextProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [start, setStart] = useState(0);
  const user = useContext(UserContext);
  const { errorMessage, sendRequest } = useHttp();

  const getChats = async (setError) => {
    console.log("env", process.env.REACT_APP_URL)
    const response = await sendRequest({
      url: `${process.env.REACT_APP_URL}chat-list/0/0`,
      headers: {
        Authorization: user.token,
      },
    });
    if (errorMessage) {
      setError(errorMessage);
    }
    setChats(response.length > 1 ? response.reverse() : response);
  };

  const getMessagesCount = async () => {
    const count = await sendRequest({
      url: `${URL}chat-room/messages-count/${user.chat.id}`,
      headers: {
        Authorization: user.token,
      },
    });

    return count;
  };

  const getMessages = async (id, start, amount, setError) => {
    const response = await sendRequest({
      url: `${URL}chat-room/${id}/${start}/${amount}`,
      headers: {
        Authorization: user.token,
      },
    });

    console.log("messages:",response)

    if (errorMessage) {
      setError(errorMessage);
    }
    if (!messages[0] || user.chat.id !== messages[0].room) {
      setMessages(
        response.map((el) => {
          return { ...el, room: user.chat.id };
        })
      );
    } else {
      setMessages((previousState) =>
        response
          .map((el) => {
            return { ...el, room: user.chat.id };
          })
          .concat(previousState)
      );
    }
  };

  const setStartMessages = (start) => {
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
