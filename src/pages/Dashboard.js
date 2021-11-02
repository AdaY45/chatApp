import { useContext } from "react";
import Chat from "../components/Chat/Chat";
import Chats from "../components/Chats/Chats";
import CreateChat from "../components/Chats/Search/CreateChat/CreateChat";
import Header from "../components/Header/Header";
import { SocketContextProvider } from "../context/socket-context";
import { ChatContextProvider } from "../context/chat-context";
import UIContext from "../context/ui-context";
import styles from "./Dashboard.module.scss";

const Dashboard = (props) => {
  const ui = useContext(UIContext);
  console.log("ui.isOpenChats", ui.isOpenChats)
  return (
    <ChatContextProvider>
      <SocketContextProvider>
        <div className={styles.container}>
          {ui.isOpenCreateChat && <CreateChat />}

          <Header isReady={props.isReady}/>

          {ui.isOpenChats && <Chats />}

          {ui.isOpenChat && <Chat />}
        </div>
      </SocketContextProvider>
    </ChatContextProvider>
  );
};

export default Dashboard;
