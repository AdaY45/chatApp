import MessageBlock from "./Message/MessageBlock";
import MessageInput from "./Message/MessageInput";
import styles from "./Messages.module.scss";

const Messages = (props) => {
    return <div className={styles.chat}>
        <MessageBlock messages={props.messages}/>
        <MessageInput messages={props.messages} onSetMessages={props.onSetMessages}/>
    </div>
};

export default Messages;