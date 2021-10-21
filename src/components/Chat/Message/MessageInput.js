import { useState } from "react";
import VideoIcon from "../../UI/Icons/Messages/VideoIcon";
import PhotoIcon from "../../UI/Icons/Messages/PhotoIcon";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import PlusIcon from "../../UI/Icons/Messages/PlusIcon";
import SmileIcon from "../../UI/Icons/Messages/SmileIcon";
import SendIcon from "../../UI/Icons/Messages/SendIcon";
import Input from "../../UI/Input/Input";
import OpenFile from "../../UI/Button/OpenFile";
import Button from "../../UI/Button/Button";
import styles from "./MessageInput.module.scss";

const MessageInput = () => {
  const [showNav, setShowNav] = useState(false);

  const plusHandler = () => {
    setShowNav(true);
  };

  const submitHandler = () => {};

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
                <PhotoIcon />
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
        />
        <button className={styles.smile}>
          <SmileIcon />
        </button>

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
