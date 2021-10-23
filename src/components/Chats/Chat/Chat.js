import { useContext } from "react";
import { msToDate } from "../../util/helpers";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import UserContext from "../../../context/user-context";
import styles from "./Chat.module.scss";

const Chat = (props) => {
  const { chat } = props;
  const user = useContext(UserContext);

  return (
    <div className={`${styles.container} ${props.style}`}>
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
        <div className={`${styles.time} ${props.style ? "text-color" :  ""}`}>
          <div className="text-color">{msToDate(chat.time)}</div>
        </div>
      </div>
      <div className={styles["message-block"]}>
        {props.isFile ? (
          <div className={styles.file}>
            <FileIcon isFile={true} />
            <div>File</div>
          </div>
        ) : (
          <p className={`${styles.message} ${props.style ? "text-color" :  ""}`}>{user.message ? user.message : chat.message}</p>
        )}
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
