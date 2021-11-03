import { useContext, useState, useEffect } from "react";
import { msToDate } from "../../util/helpers";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import UserContext from "../../../context/user-context";
import PhotoIcon from "../../UI/Icons/Messages/PhotoIcon";
import styles from "./Chat.module.scss";

const Chat = (props) => {
  const { chat } = props;
  const user = useContext(UserContext);
  const formats = ["jpeg", "png", "jpg", "JPEG", "JPG", "PNG"];
  const [isImage, setIsImage] = useState(false);

  console.log("IsImage", isImage);

  useEffect(() => {
    setIsImage(
      chat.file && formats.includes(chat.file.toString().split(".")[1])
    );
  }, [chat.file]);

  const displayMessage = () => {
    if (user.message && user.message.room === chat.id) {
      if (user.message.text.length > 100) {
        return `${user.message.text.slice(0, 100)}...`;
      } else {
        return user.message.text;
      }
    } else if (chat.message && chat.message !== null) {
      if (chat.message.length > 100) {
        return `${chat.message.slice(0, 100)}...`;
      } else {
        return chat.message;
      }
    }

    return "";
  };

  const displayFile = () => {
    if (chat.file && !isImage) {
      return (
        <div className={styles.file}>
          <FileIcon isFile={true} />
          <div>File</div>
        </div>
      );
    } else if (isImage) {
      return (
        <div className={`${styles.file} ${styles.image}`}>
          <PhotoIcon isFile={true} />
          <div>Photo</div>
        </div>
      );
    }
    return (
      <p className={`${styles.message} ${props.style ? "text-color" : ""}`}>
        {displayMessage()}
      </p>
    );
  };

  console.log("chat.status", chat.status)

  return (
    <div className={`${styles.container} ${props.style}`}>
      <div className={styles["chat-info"]}>
        <div className={styles["profile-info"]}>
          <div className={styles["img-block"]}>
            {chat.online && <div className={styles.green}></div>}
            <img src={chat.photo} alt="prfileImg" className={styles.img} />
          </div>
          <div className={styles.text}>
            <div className="name">{chat.name}</div>
            <div className="online">
              {chat.status === "...writing"
                ? chat.status
                : chat.exitDate
                ? msToDate(chat.exitDate)
                : chat.online
                ? "online"
                : chat.status !== "dispatch"
                ? chat.status
                : ""}
            </div>
          </div>
        </div>
        <div className={`${styles.time} ${props.style ? "text-color" : ""}`}>
          <div className="text-color">
            {user.message &&
            user.message.room === chat.id &&
            user.message.date !== null
              ? msToDate(user.message.date)
              : chat.time !== null
              ? msToDate(chat.time)
              : ""}
          </div>
        </div>
      </div>
      <div className={styles["message-block"]}>
        {displayFile()}
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
