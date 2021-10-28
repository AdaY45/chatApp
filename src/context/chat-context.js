import { useContext, useState, createContext } from "react";
import UserContext from "../context/user-context";
import useHttp from "../hooks/use-http";

const ChatContext = createContext({});

export const ChatContextProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [start, setStart] = useState(0);
  const user = useContext(UserContext);
  const { errorMessage, sendRequest } = useHttp();

  const getChats = async (setError) => {
    const response = await sendRequest({
      url: `http://localhost:3000/chat-list/0/0`,
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
    console.log("user.chat.id context: ", user.chat.id);
    const count = await sendRequest({
      url: `http://localhost:3000/chat-room/messages-count/${user.chat.id}`,
      headers: {
        Authorization: user.token,
      },
    });
    console.log(count);

    return count;
  };

  const getMessages = async (start, amount, setError) => {
    const response = await sendRequest({
      url: `http://localhost:3000/chat-room/${user.chat.id}/${start}/${amount}`,
      headers: {
        Authorization: user.token,
      },
    });

    if (errorMessage) {
      setError(errorMessage);
    }
    if (!messages[0] || user.chat.id !== messages[0].room) {
      console.log("user.chat.id", user.chat.id);
      console.log("messages[0]", messages[0]);
      console.log("response[0]", response[0]);
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
    console.log(start);
    if (start > 0) {
      setStart(start);
    } else {
      setStart(0);
    }
  };

  const reduceCountMessages = () => {
    setStartMessages((previousState) =>
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
