import { useContext } from "react";
import Message from "./Message";
import ChatContext from "../../../context/chat-context";
import styles from "./MessageBlock.module.scss";

const MessageBlock = (props) => {
  const chat = useContext(ChatContext);

  const handleScroll = (e) => {
    // console.log("e.target.scrollHeight + e.target.scrollTop", Math.ceil(e.target.scrollHeight + e.target.scrollTop))
    // console.log("e.target.clientHeight", e.target.clientHeight)
    const bottom =
      Math.ceil(e.target.scrollHeight + e.target.scrollTop) < 552;
    if (bottom) {
      chat.reduceCountMessages();
    }
  };

  console.log("messages", chat.messages);

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
