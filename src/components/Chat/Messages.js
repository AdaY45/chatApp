import { useState } from "react";
import MessageBlock from "./Message/MessageBlock";
import MessageInput from "./Message/MessageInput";
import styles from "./Messages.module.scss";

const Messages = (props) => {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.chat}>
      <MessageBlock
        messages={props.messages}
        onSetMessages={props.onSetMessages}
        onSetMessage={setMessage}
      />
      <MessageInput
        messages={props.messages}
        onSetMessages={props.onSetMessages}
        message={message}
        onSetMessage={setMessage}
      />
    </div>
  );
};

export default Messages;
