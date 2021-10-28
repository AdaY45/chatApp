import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formatBytes } from "../../util/helpers";
import CheckedIcon from "../../UI/Icons/Messages/CheckedIcon";
import styles from "./Message.module.scss";
import FileIcon from "../../UI/Icons/Messages/FileIcon";
import MoreButton from "./MoreButton";

const Message = (props) => {
  const { message } = props;
  const userStyle = message.type === "user";
  const isImage =
    message.file &&
    (message.file.name.includes("jpeg") ||
      message.file.name.includes("png") ||
      message.file.name.includes("jpg"));

  return (
    <div className={styles.container}>
      <div className={`${styles.message} ${userStyle ? styles.owner : ""}`}>
        {message.type !== "user" && (
          <div className={styles.image}>
            <img
              src={message.photo}
              className={styles["profile-img"]}
              alt="profile-img"
            />
          </div>
        )}
        {message.status === "read" && message.type === "user" && (
          <div className={styles.checked}>
            <CheckedIcon />
          </div>
        )}
        <div
          className={`${styles["message-block"]} ${
            userStyle ? styles.owner : ""
          }`}
        >
          <div className={styles.text}>{message.text}</div>
          {isImage && (
            <img
              src={"http://localhost:3000/images/" + message.file.name}
              alt="MessagePhoto"
              className={styles.photo}
            />
          )}
          {message.file && !isImage && (
            <NavLink
              to={message.file.href}
              target="_blank"
              className={styles.file}
              download
            >
              <div className={styles["file-icon"]}>
                <FileIcon />
              </div>
              <div className={styles["file-info"]}>
                <div className={styles.name}>{message.file.name}</div>
                <div className={styles.size}>
                  {formatBytes(message.file.size)}
                </div>
              </div>
            </NavLink>
          )}
        </div>
        <MoreButton
          userStyle={userStyle}
          message={props.message}
          onSetMessage={props.onSetMessage}
        />
      </div>
      {/* {showTime && <div className={styles.time}>{message.date}</div>} */}
    </div>
  );
};

export default Message;
