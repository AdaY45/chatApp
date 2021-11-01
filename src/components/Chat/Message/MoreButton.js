import { useState, useRef, useEffect, useContext } from "react";
import MoreIcon from "../../UI/Icons/Messages/MoreIcon";
import UIContext from "../../../context/ui-context";
import UserContext from "../../../context/user-context";
import SocketContext from "../../../context/socket-context";
import styles from "./MoreButton.module.scss";

const MoreButton = (props) => {
  const ref = useRef();
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
 
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const socket = useContext(SocketContext);

  const onEditClickHandler = () => {
    setIsMoreOpen(false);
    ui.setIsEdit(true);
    props.onSetMessage(props.message.text);
    user.setMessageId(props.message.id);
  };

  const onDeleteClickHandler = () => {
    setIsMoreOpen(false);
    socket.deleteMessage(props.message.id);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMoreOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  return (
    <div className={styles["more-block"]} ref={ref}>
      <button
        className={styles.icon}
        onClick={() => setIsMoreOpen((oldState) => !oldState)}
      >
        <MoreIcon />
      </button>
      {isMoreOpen && (
        <div
          className={`${styles.more} ${
            props.userStyle ? styles["more-owner"] : ""
          }`}
        >
          {props.message.type === "user" && (
            <>
              <button
                className={styles["more-btn"]}
                onClick={onEditClickHandler}
              >
                Edit
              </button>
              <button
                className={styles["more-btn"]}
                onClick={onDeleteClickHandler}
              >
                Delete
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MoreButton;
