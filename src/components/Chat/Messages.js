import MessageBlock from "./Message/MessageBlock";
import MessageInput from "./Message/MessageInput";
import styles from "./Messages.module.scss";

const Messages = () => {
    return <div className={styles.chat}>
        <MessageBlock />
        <MessageInput />
    </div>
};

export default Messages;