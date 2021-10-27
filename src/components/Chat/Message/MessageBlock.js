import Message from "./Message";
import UserContext from "../../../context/user-context";
import styles from "./MessageBlock.module.scss";
import { useContext, useRef } from "react";

const MessageBlock = (props) => {
  const messages = props.messages;
  const user = useContext(UserContext);

  const handleScroll = (e) => {
    const bottom =
      Math.floor(e.target.scrollHeight + e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom) {
      user.reduceCountMessages();
    }
  };

  return (
    <div className={styles["message-block"]}>
      <div className={styles.container} onScroll={handleScroll}>
        <div className={styles.messages}>
          {messages.map((el) => (
            <Message
              key={el.id}
              message={el}
              onSetMessages={props.onSetMessages}
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
