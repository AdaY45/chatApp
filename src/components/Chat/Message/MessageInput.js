import { useState, useContext } from "react";
import VideoIcon from "../../UI/Icons/Messages/VideoIcon";
import PhotoIcon from "../../UI/Icons/Messages/PhotoIcon";
import PlusIcon from "../../UI/Icons/Messages/PlusIcon";
import SmileIcon from "../../UI/Icons/Messages/SmileIcon";
import SendIcon from "../../UI/Icons/Messages/SendIcon";
import OpenFile from "../../UI/Button/OpenFile";
import Picker from "emoji-picker-react";
import useSocket from "../../../hooks/use-socket";
import UserContext from "../../../context/user-context";
import UIContext from "../../../context/ui-context";
import styles from "./MessageInput.module.scss";
import FileIcon from "../../UI/Icons/Messages/FileIcon";

const MessageInput = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const user = useContext(UserContext);
  const ui = useContext(UIContext);
  const sendMessage = useSocket(props.onSetMessages, props.messages);

  const onEmojiClick = (event, emojiObject) => {
    ui.setIsEmojji(true);
    setMessage((previousState) => previousState.concat(emojiObject.emoji));
  };

  const plusHandler = (event) => {
    event.preventDefault();

    setShowNav(!showNav);
  };

  const onEmojiOpenClick = (event) => {
    event.preventDefault();

    setIsOpenEmoji(!isOpenEmoji);
  };

  const onChangeInput = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    sendMessage(user.chat.id, message);

    setMessage("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["plus-nav"]}>
          {showNav && (
            <div className={styles.nav}>
              <OpenFile id="videoupload">
                <VideoIcon />
              </OpenFile>

              <OpenFile id="imgupload">
                <PhotoIcon />
              </OpenFile>

              <OpenFile id="fileupload">
                <FileIcon />
              </OpenFile>
            </div>
          )}
          <button className={styles["input-message-btn"]} onClick={plusHandler}>
            <div className={styles.icon}>
              <PlusIcon />
            </div>
          </button>
        </div>
        <input
          id="message"
          type="text"
          placeholder="Type a message here"
          className={styles.message}
          value={message}
          onChange={onChangeInput}
        />
        <button className={styles.smile} onClick={onEmojiOpenClick}>
          <SmileIcon />
        </button>
        {isOpenEmoji && (
          <div className={styles.emoji}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}

        <button className={styles["input-message-btn"]}>
          <div className={styles.icon}>
            <SendIcon />
          </div>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
