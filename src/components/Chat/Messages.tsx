import { useState } from "react";
import MessageBlock from "./Message/MessageBlock";
import MessageInput from "./Message/MessageInput";
import styles from "./Messages.module.scss";

const Messages: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className={styles.chat}>
      <MessageBlock
        onSetMessage={setMessage}
      />
      <MessageInput
        message={message}
        onSetMessage={setMessage}
      />
    </div>
  );
};

export default Messages;
