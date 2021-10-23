import { NavLink } from "react-router-dom";
import { formatBytes } from "../../util/helpers";
import MoreIcon from "../../UI/Icons/Messages/MoreIcon";
import CheckedIcon from "../../UI/Icons/Messages/CheckedIcon";
import styles from "./Message.module.scss";
import FileIcon from "../../UI/Icons/Messages/FileIcon";

const Message = (props) => {
  const { message, image, onSetImage } = props;
  const userStyle = message.type === "user" ? styles.owner : "";
  const isImage =
    message.file &&
    (message.file.name.includes("jpeg") ||
      message.file.name.includes("png") ||
      message.file.name.includes("jpg"));

  return (
    <div className={styles.container}>
      <div className={`${styles.message} ${userStyle}`}>
        {message.type !== "user" && (
          <div className={styles.image}>
            <img
              src={message.photo}
              className={styles["profile-img"]}
              alt="profile-img"
            />
          </div>
        )}
        {message.status === "read" && message.type === "user" && (
          <div className={styles.checked}>
            <CheckedIcon />
          </div>
        )}
        <div className={`${styles["message-block"]} ${userStyle}`}>
          <div className={styles.text}>{message.text}</div>
          {isImage && (
            <img
              src={"http://localhost:3000/images/" + message.file.name}
              alt="MessagePhoto"
              className={styles.photo}
            />
          )}
          {message.file && !isImage && (
            <NavLink
              to={message.file.href}
              target="_blank"
              className={styles.file}
              download
            >
              <div className={styles["file-icon"]}>
                <FileIcon />
              </div>
              <div className={styles["file-info"]}>
                <div className={styles.name}>{message.file.name}</div>
                <div className={styles.size}>
                  {formatBytes(message.file.size)}
                </div>
              </div>
            </NavLink>
          )}
        </div>
        <button className={styles.icon}>
          <MoreIcon />
        </button>
      </div>
      {/* {showTime && <div className={styles.time}>{message.date}</div>} */}
    </div>
  );
};

export default Message;
