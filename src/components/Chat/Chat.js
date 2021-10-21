import { useEffect, useContext, useState } from "react";
import profileImg from "../../images/profile-image.png";
import AttachIcon from "../UI/Icons/Messages/AttachIcon";
import MoreIcon from "../UI/Icons/Messages/MoreIcon";
import styles from "./Chat.module.scss";
import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader/Loader";
import Messages from "./Messages";
import UserContext from "../../context/user-context";
import ChatContext from "../../context/chat-context";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const profileName = "Nika Jerrardo";
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const user = useContext(UserContext);
  const chat = useContext(ChatContext);
  console.log("chat: " + chat.chatId);
  useEffect(() => {
    const getChats = async () => {
      console.log("token chats:" + user.token);
      console.log("chat id:" + chat.chatId);
      const response = await sendRequest({
        url: `http://localhost:3000/chat-room/${chat.chatId}/1/10`,
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    };

    getChats();
  }, [user.token.token, sendRequest, user.token, chat.chatId]);

  return (
    <section className={styles.container}>
      {isLoading && <Loader />}
      <div className={styles["message-hat"]}>
        <div className={styles["chat-info"]}>
          <img
            src={profileImg}
            className={styles["profile-img"]}
            alt="profileImage"
          />
          <div className={styles["profile-info"]}>
            <div className="name">{profileName}</div>
            <div className="online">last online 5 hours ago</div>
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

      <Messages />
    </section>
  );
};

export default Chat;
