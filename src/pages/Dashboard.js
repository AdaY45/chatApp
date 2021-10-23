import { useContext } from "react";
import Chat from "../components/Chat/Chat";
import Chats from "../components/Chats/Chats";
import Header from "../components/Header/Header";
import UIContext from "../context/ui-context";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const ui = useContext(UIContext);
  return (
    <div className={styles.container}>
      <Header />

      {ui.isOpenChats && <Chats />}

      {ui.isOpenChat && <Chat />}
    </div>
  );
};

export default Dashboard;
