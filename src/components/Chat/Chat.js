import { useEffect, useContext, useState } from "react";
import { msToDate } from "../util/helpers";
import AttachIcon from "../UI/Icons/Messages/AttachIcon";
import MoreIcon from "../UI/Icons/Messages/MoreIcon";
import styles from "./Chat.module.scss";
import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader/Loader";
import Messages from "./Messages";
import UserContext from "../../context/user-context";
import ChatContext from "../../context/chat-context";

const Chat = () => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(10);
  const user = useContext(UserContext);
  const chat = useContext(ChatContext);

  useEffect(() => {
    const getCount = async () => {
      setIsReady(false);
      const count = await chat.getMessagesCount();
      chat.setStartMessages(count - 10);
      setIsReady(true);
    };

    getCount();
  }, []);

  useEffect(() => {
    const getChats = async () => {
      if (isReady) {  
        setAmount(chat.start >= 10 ? 10 : chat.start);
        setIsLoading(true);
        await chat.getMessages(chat.start, amount, setError);
        setIsLoading(false)
      }
    };

    getChats();
  }, [chat.start, amount, isReady, user.chat.id]);

  return (
    <section className={styles.container}>
      {error && <div className="error">{error}</div>}
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

      {chat.messages.length === 0 && !isLoading && <div className={styles.empty}>No messages</div>}
      <Messages />
    </section>
  );
};

export default Chat;
