import { useContext, useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import styles from "./Chats.module.scss";
import PlusIcon from "../UI/Icons/Messages/PlusIcon";
import Search from "./Search/Search";
import Chat from "./Chat/Chat";
import useHttp from "../../hooks/use-http";
import UserContext from "../../context/user-context";
import UIContext from "../../context/ui-context";
import useWindowDimensions from "../../hooks/use-dimensions";
import Loader from "../UI/Loader/Loader";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    const getChats = async () => {
      const response = await sendRequest({
        url: `http://localhost:3000/chat-list/0/0`,
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json",
        },
      });
      setChats(response);
      console.log(response);
    };

    getChats();
  }, [user.token.token, sendRequest, user.token]);

  return (
    <section className={styles.chats}>
      <div className={styles.head}>
        <div className={styles.text}>
          <h1 className="main-text">Chats</h1>
          <Filter>Recent Chats</Filter>
        </div>
        <button className={styles.create}>
          <PlusIcon />
          <div>Create new Chat</div>
        </button>
      </div>

      <Search />

      {errorMessage && <div className="error">Error fetching data...</div>}

      {isLoading && <Loader />}

      <div className={styles["chats-container"]}>
        {chats.map((el) => (
          <button
            key={el.id}
            onClick={() => {
              user.setChat(el);
              setIsClicked(true);
              ui.setIsOpenChat(true);
              if(windowDimensions.width < 1100) {
                ui.setIsOpenChats(false);
              }
            }}
            className={`${styles["chat-btn"]}`}
          >
            <Chat
              key={el.id}
              chat={el}
              isFile={el.hasOwnProperty("file")}
              style={isClicked && el.id === user.chat.id ? "active" : ""}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Chats;
