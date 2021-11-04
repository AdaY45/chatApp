import { formatBytes } from "../../util/helpers";
import CheckedIcon from "../../UI/Icons/Messages/CheckedIcon";
import styles from "./Message.module.scss";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import MoreButton from "./MoreButton";
import { IMessage } from "../../../interfaces/chat";

const Message: React.FC<{
  message: IMessage;
  onSetMessage: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const { message } = props;
  const userStyle: boolean = message.type === "user";
  const fileName: string | null = checkFileName();
  const formats: Array<string> = ["jpeg", "png", "jpg", "JPEG", "JPG", "PNG"];
  const isImage = checkIsImage();

  function checkIsImage() {
    if (message.file && fileName) {
      return formats.filter((el) => el === fileName.split(".")[1]).length > 0;
    }
    return false;
  }

  function checkFileName() {
    if (message.file) {
      return message.file.name.split("$")[1];
    }
    return null;
  }

  const checkIfFile = () => {
    if (message.file) {
      return "http://localhost:3000/files/" + message.file.name;
    }
    return "";
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.message} ${userStyle ? styles.owner : ""}`}>
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
        <div
          className={`${styles["message-block"]} ${
            userStyle ? styles.owner : ""
          }`}
        >
          <div className={styles.text}>{message.text}</div>
          {isImage && (
            <img
              src={checkIfFile()}
              alt="MessagePhoto"
              className={styles.photo}
            />
          )}
          {message.file && !isImage && (
            <a
              href={message.file.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.file} ${userStyle ? styles.user : ""}`}
              download={fileName}
            >
              <div className={styles["file-icon"]}>
                <FileIcon isFile={userStyle} />
              </div>
              <div className={styles["file-info"]}>
                <div className={styles.name}>{fileName}</div>

                {!userStyle && (
                  <div className={styles.size}>
                    {formatBytes(message.file.size)}
                  </div>
                )}
              </div>
              {userStyle && (
                <div className={styles.size}>
                  ({formatBytes(message.file.size)})
                </div>
              )}
            </a>
          )}
        </div>
        <MoreButton
          userStyle={userStyle}
          message={message}
          onSetMessage={props.onSetMessage}
        />
      </div>
      {/* {showTime && <div className={styles.time}>{message.date}</div>} */}
    </div>
  );
};

export default Message;
