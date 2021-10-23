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
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const user = useContext(UserContext);

  useEffect(() => {
    const getChats = async () => {
      const response = await sendRequest({
        url: `http://localhost:3000/chat-room/${user.chat.id}/1/10`,
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json",
        },
      });

      console.log("Chat: " + response.photo);
      setMessages(response);
    };

    getChats();
  }, [sendRequest, user.token, user.chat.id]);

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

      {isLoading && <Loader />}

      <Messages messages={messages} onSetMessages={setMessages}/>
    </section>
  );
};

export default Chat;
