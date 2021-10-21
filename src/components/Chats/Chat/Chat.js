import styles from "./Chat.module.scss";

const Chat = (props) => {
  const { chat } = props;
  const date = chat.time - new Date().getMilliseconds();

  return (
    <div className={styles.container}>
      <div className={styles["chat-info"]}>
        <div className={styles["profile-info"]}>
          <div className={styles["img-block"]}>
            <div className={styles.green}></div>
            <img src={chat.photo} alt="prfileImg" className={styles.img} />
          </div>
          <div className={styles.text}>
            <div className="name">{chat.name}</div>
            <div className="online">{chat.status}</div>
          </div>
        </div>
        <div className={styles.time}>
          <div>{date}</div>
        </div>
      </div>
      <div className={styles["message-block"]}>
        <p className={styles.message}>{chat.message}</p>
        {chat.noChecked > 0 && (
          <div className={styles.unread}>
            <div>{chat.noChecked}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
