import { useState, useContext, useRef } from "react";
import UIContext from "../../../../context/ui-context";
import useInput from "../../../../hooks/use-input";
import useSocket from "../../../../hooks/use-socket";
import UserContext from "../../../../context/user-context";
import SocketContext from "../../../../context/socket-context";
import OpenFile from "../../../UI/Button/OpenFile";
import PhotoIcon from "../../../UI/Icons/Messages/PhotoIcon";
import styles from "./CreateChat.module.scss";

const CreateChat = () => {
  const [type, setType] = useState("room");
  const [users, setUsers] = useState([]);
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const socket = useContext(SocketContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const {
    value: name,
    isValid: nameIsValid,
    hasErrors: nameHasErrors,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => /\S+@\S+\.\S+/.test(value));

  const onChangeFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (type === "room") {
      if (!selectedFile) {
        setError("Choose the photo");
      }
      if (!emailIsValid && !nameIsValid && !selectedFile) {
        return;
      }
      console.log(selectedFile);
      const file = {
        originalName: selectedFile.name,
        size: selectedFile.size,
        buffer: selectedFile,
      };

      console.log("file.buffer",file.buffer)

      socket.createChat(users.concat(user.email), file, name);
    } else if (type === "personal") {
      if (!emailIsValid) {
        return;
      }

      socket.createPersonal([email, user.email]);
    }

    ui.setIsOpenCreateChat();
  };

  console.log(users);

  return (
    <section
      className={styles.container}
      onClick={() => ui.setIsOpenCreateChat()}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className="main-text">Create New Chat</h1>
        <div className={styles.create}>
          {error && <div className="error">{error}</div>}
          <div className={styles.nav}>
            <button
              className={styles["nav-btn"]}
              onClick={() => setType("room")}
            >
              Room
            </button>
            <button
              className={styles["nav-btn"]}
              onClick={() => setType("personal")}
            >
              Personal chat
            </button>
          </div>
          <div className={styles["form-container"]}>
            <form className={styles.form} onSubmit={submitHandler}>
              {type === "room" && (
                <div className={styles.room}>
                  {nameHasErrors && (
                    <div className="error">Name is not valid</div>
                  )}
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                  />
                  <div className={styles.photo}>
                    {!selectedFile ? (
                      <>
                        <input
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          id={"imgupload"}
                          onChange={onChangeFile}
                        />
                        <label htmlFor={"imgupload"} className={styles.label}>
                          <button className={styles["open-file"]}>
                            <PhotoIcon active={true} />
                          </button>
                          <div className={styles.text}>
                            {"Choose the photo"}
                          </div>
                        </label>
                      </>
                    ) : (
                      <div className={styles.info}>
                        <PhotoIcon active={true} />
                        <div className={styles.text}>{selectedFile.name}</div>
                      </div>
                    )}
                  </div>
                  {users.map((el) => (
                    <div className={styles.users}>
                      <div className={styles.user}>{el}</div>
                      <button
                        onClick={() =>
                          setUsers(users.filter((user) => user !== el))
                        }
                      >
                        x
                      </button>
                    </div>
                  ))}
                  {emailHasErrors && (
                    <div className="error">Email is not valid</div>
                  )}
                  <input
                    type="text"
                    placeholder="User email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={email}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setUsers((previousState) => previousState.concat(email));
                    }}
                    className={styles["add-user-btn"]}
                  >
                    Add User
                  </button>
                </div>
              )}
              {type === "personal" && (
                <div className={styles.personal}>
                  {emailHasErrors && (
                    <div className="error">Email is not valid</div>
                  )}
                  <input
                    type="text"
                    placeholder="User email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                  />
                </div>
              )}
              <button type="submit" className={styles.submit}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateChat;
