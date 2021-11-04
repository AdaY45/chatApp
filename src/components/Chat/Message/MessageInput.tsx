import { useState, useContext, useEffect } from "react";
import VideoIcon from "../../UI/Icons/Messages/VideoIcon";
import PhotoIcon from "../../UI/Icons/Messages/PhotoIcon";
import PlusIcon from "../../UI/Icons/Messages/PlusIcon";
import SmileIcon from "../../UI/Icons/Messages/SmileIcon";
import SendIcon from "../../UI/Icons/Messages/SendIcon";
import OpenFile from "../../UI/Button/OpenFile";
import Picker, { IEmojiData } from "emoji-picker-react";
import UserContext from "../../../context/user-context";
import UIContext from "../../../context/ui-context";
import SocketContext from "../../../context/socket-context";
import styles from "./MessageInput.module.scss";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import { IUploadingFile } from "../../../interfaces/chat";

const MessageInput: React.FC<{
  message: string;
  onSetMessage: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isOpenEmoji, setIsOpenEmoji] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = useContext(UserContext);
  const ui = useContext(UIContext);
  const socket = useContext(SocketContext);

  useEffect(() => {
    setSelectedFile(null);
  }, [user.chat.id]);

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    ui.setIsEmojji(true);
    props.onSetMessage((previousState) =>
      previousState.concat(emojiObject.emoji)
    );
  };

  const plusHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setShowNav(!showNav);
  };

  const onEmojiOpenClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setIsOpenEmoji(!isOpenEmoji);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSetMessage(event.target.value);
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;
    setSelectedFile(e.target.files[0]);
    setShowNav(false);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsOpenEmoji(false);

    const file: IUploadingFile | undefined = selectedFile
      ? {
          originalName: selectedFile.name,
          size: selectedFile.size,
          buffer: selectedFile,
        }
      : undefined;

    if (ui.isEdit) {
      socket.updateMessage(user.messageId, props.message);
      ui.setIsEdit(false);
    } else {
      socket.sendMessage(user.chat.id, props.message, file);
    }

    props.onSetMessage("");
    setSelectedFile(null);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        {selectedFile && (
          <div className={styles.file}>
            <FileIcon isFile={true} />
            <div className={styles.name}>{selectedFile.name}</div>
          </div>
        )}
        <div className={styles["plus-nav"]}>
          {showNav && (
            <div className={styles.nav}>
              <OpenFile
                id="videoupload"
                accept="video/mp4,video/x-m4v,video/*"
                onChange={onChangeFile}
              >
                <VideoIcon />
              </OpenFile>

              <OpenFile
                id="imgupload"
                accept=".jpg, .jpeg, .png"
                onChange={onChangeFile}
              >
                <PhotoIcon />
              </OpenFile>

              <OpenFile id="fileupload" onChange={onChangeFile}>
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
          value={props.message}
          onChange={onChangeInput}
          onFocus={() => socket.startWriting(user.chat.id)}
          onBlur={() => socket.stopWriting(user.chat.id)}
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
