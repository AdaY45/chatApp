import { useContext, useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import styles from "./Chats.module.scss";
import PlusIcon from "../UI/Icons/Messages/PlusIcon";
import Search from "./Search/Search";
import Chat from "./Chat/Chat";
import useHttp from "../../hooks/use-http";
import UserContext from "../../context/user-context";
import UIContext from "../../context/ui-context";
import Loader from "../UI/Loader/Loader";
import ChatContext from "../../context/chat-context";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const chat = useContext(ChatContext);
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const { isLoading, errorMessage, sendRequest } = useHttp();

  // const chatClickHandler = (event) => {
  //   console.log(event);
  //   chat.addChatId(event.target.id);
  //   ui.setIsOpenChat(true);
  // };

  chats.forEach((el) => console.log(el.id))

  useEffect(() => {
    const getChats = async () => {
      console.log("token chats:" + user.token);
      const response = await sendRequest({
        url: "http://localhost:3000/chat-list/1/10",
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

      {chats.map((el) => (
        <button
          key={el.id}
          onClick={(() => {
            //console.log('el', el.id)
            chat.setId(el.id);
            ui.setIsOpenChat(true);
          })}
          className={styles["chat-btn"]}
        >
          <Chat key={el.id} chat={el} />
        </button>
      ))}
    </section>
  );
};

export default Chats;
