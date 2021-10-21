import { useState } from "react";
import MoreIcon from "../../UI/Icons/Messages/MoreIcon";
import styles from "./Message.module.scss";

const Message = (props) => {
  const [showTime, setShowTime] = useState(true);
  const user = props.owner === "owner" ? styles.owner : "";
  //   const length = props.messages.length;
  //   const index = props.messages.indexOf(props.message);
  //   if (length - 1 === index) {
  //     setShowTime(true);
  //   }

  return (
    <div className={styles.container}>
      <div className={`${styles.message} ${user}`}>
        <div className={`${styles["message-block"]} ${user}`}>{props.text}</div>
        <button className={styles.icon}>
          <MoreIcon />
        </button>
      </div>
      {showTime && <div className={styles.time}>{props.message.time}</div>}
    </div>
  );
};

export default Message;
