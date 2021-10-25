import Message from "./Message";
import styles from "./MessageBlock.module.scss";

const MessageBlock = (props) => {
  const messages  = props.messages;
  return (
    <div className={styles["message-block"]}>
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages.map((el) => 
            <Message key={el.id} message={el} onSetMessages={props.onSetMessages} onSetMessage={props.onSetMessage}/>
          )}
          {/* <div className={styles.time}>4 days ago</div> */}
        </div>
      </div>
    </div>
  );
};

export default MessageBlock;
