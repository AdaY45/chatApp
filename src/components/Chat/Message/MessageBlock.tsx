import { useContext } from "react";
import Message from "./Message";
import ChatContext from "../../../context/chat-context";
import styles from "./MessageBlock.module.scss";

const MessageBlock: React.FC<{
  onSetMessage: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const chat = useContext(ChatContext);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom: boolean = Math.ceil((e.target as HTMLElement).scrollHeight + (e.target as HTMLElement).scrollTop) < 552;
    if (bottom) {
      chat.reduceCountMessages();
    }
  };

  return (
    <div className={styles["message-block"]}>
      <div className={styles.container} onScroll={handleScroll}>
        <div className={styles.messages}>
          {chat.messages.map((el) => (
            <Message
              key={el.id}
              message={el}
              onSetMessage={props.onSetMessage}
            />
          ))}
          {/* <div className={styles.time}>4 days ago</div> */}
        </div>
      </div>
    </div>
  );
};

export default MessageBlock;
