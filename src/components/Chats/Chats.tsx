import { useContext, useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import styles from "./Chats.module.scss";
import PlusIcon from "../UI/Icons/Messages/PlusIcon";
import Search from "./Search/Search";
import Chat from "./Chat/Chat";
import UserContext from "../../context/user-context";
import UIContext from "../../context/ui-context";
import ChatContext from "../../context/chat-context";
import useWindowDimensions from "../../hooks/use-dimensions";
import Loader from "../UI/Loader/Loader";

const Chats: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const chats = useContext(ChatContext); 
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    const getChats = async () => {
      if (ui.loadChats) {
        setIsLoading(true);
        chats.getChats(setError);
        setIsLoading(false);
        ui.setLoadChats(false);
      }
    };

    getChats();
  }, [ui.loadChats]);

  return (
    <section className={styles.chats}>
      <div className={styles.head}>
        <div className={styles.text}>
          <h1 className="main-text">Chats</h1>
          <Filter>Recent Chats</Filter>
        </div>
        <button
          className={styles.create}
          onClick={() => ui.setIsOpenCreateChat()}
        >
          <PlusIcon />
          <div>Create new Chat</div>
        </button>
      </div>

      <Search />

      {error && <div className="error">{error}</div>}

      {isLoading && <Loader />}

      <div className={styles["chats-container"]}>
        {chats.chats.map((el) => (
          <button
            key={el.id}
            onClick={() => {
              user.setChat(el);
              setIsClicked(true);
              ui.setIsOpenChat(true);
              if (windowDimensions.width < 1100) {
                ui.setIsOpenChats(false);
              }
            }}
            className={`${styles["chat-btn"]}`}
          >
            <Chat
              key={el.id}
              chat={el}
              isFile={el.hasOwnProperty("file") && el.file !== null}
              style={isClicked && el.id === user.chat.id ? "active" : ""}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Chats;
