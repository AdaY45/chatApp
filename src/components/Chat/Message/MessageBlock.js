import Message from "./Message";
import img from "../../../images/profile-image.png";
import styles from "./MessageBlock.module.scss";

const MessageBlock = () => {
    const messages = [{user: "user1" ,text: "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application."}, {user: "owner", text: "Can I send you files?"}];

    return <div className={styles["message-block"]}>
        <div className={styles.container}>
            {/* <img src={img} className={styles["profile-img"]} alt="profile-img"/> */}
            <div className={styles.messages}>
                {messages.map(el => 
                    <Message text={el.text} owner={el.user} messages={messages} message={el}/>
                )}
                {/* <div className={styles.time}>4 days ago</div> */}
                {/* {messages.map(el => 
                    <Message text={el.text} owner={el.user} messages={messages} message={el}/>
                )} */}
            </div>
        </div>
    </div>
};

export default MessageBlock;