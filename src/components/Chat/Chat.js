import { useEffect, useContext, useState } from "react";
import { msToDate } from "../util/helpers";
import AttachIcon from "../UI/Icons/Messages/AttachIcon";
import MoreIcon from "../UI/Icons/Messages/MoreIcon";
import styles from "./Chat.module.scss";
import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader/Loader";
import Messages from "./Messages";
import UserContext from "../../context/user-context";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [amount, setAmount] = useState(0);
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const user = useContext(UserContext);

  useEffect(() => {
    const getCount = async () => {
      setIsReady(false);
      const count = await sendRequest({
        url: `http://localhost:3000/chat-room/messages-count/${user.chat.id}`,
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json",
        },
      });
      user.setStartM(count - 10);
      setAmount(count - 10);
      console.log("count: " + count);
      setIsReady(true);
    };

    getCount();
  }, []);

  useEffect(() => {
    const getChats = async () => {
      if (isReady) {
        console.log("user.startMessages: " + user.startMessages);
        const response = await sendRequest({
          url: `http://localhost:3000/chat-room/${user.chat.id}/${
            user.startMessages
          }/${amount > 10 ? 10 : 10 + amount}`,
          headers: {
            Authorization: user.token,
            "Content-Type": "application/json",
          },
        });

        console.log("Chat: " + response);
        if (!messages[0] || user.chat.id !== messages[0].room) {
          setMessages(response);
        } else{
          setMessages((previousState) => response.concat(previousState));
        }
      }
    };

    getChats();
  }, [sendRequest, user.token, user.chat.id, user.startMessages, isReady]);

  return (
    <section className={styles.container}>
      {errorMessage && <div className="error">Error</div>}
      <div className={styles["message-hat"]}>
        <div className={styles["chat-info"]}>
          <img
            src={user.chat.photo}
            className={styles["profile-img"]}
            alt="profileImage"
          />
          <div className={styles["profile-info"]}>
            <div className="name">{user.chat.name}</div>
            <div className="online">{msToDate(user.chat.time)}</div>
          </div>
        </div>
        <div className={styles.nav}>
          <button className="profile-btn">
            <AttachIcon />
          </button>
          <button className="profile-btn">
            <MoreIcon />
          </button>
        </div>
      </div>

      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      <Messages messages={messages} onSetMessages={setMessages} />
    </section>
  );
};

export default Chat;
