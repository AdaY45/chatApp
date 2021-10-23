import { useContext, useState } from "react";
import HomeIcon from "../../UI/Icons/Header/HomeIcon";
import ChatIcon from "../../UI/Icons/Header/ChatIcon";
import ContactIcon from "../../UI/Icons/Header/ContactIcon";
import NotificationsIcon from "../../UI/Icons/Header/NotificationsIcon";
import CalendarIcon from "../../UI/Icons/Header/CalendarIcon";
import SettingsIcon from "../../UI/Icons/Header/SettingsIcon";
import UIContext from "../../../context/ui-context";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const isOpenChats = useContext(UIContext);
  const clickHandler = () => {
      setIsActive(true);
      isOpenChats.setIsOpenChats(true);
  };

  return (
    <nav className={styles.nav}>
      <button onClick={clickHandler} className={styles["nav-btn"]}>
        <HomeIcon />
        <div className={styles.text}>Home</div>
      </button>

      <button onClick={clickHandler} className={`${styles["nav-btn"]} ${isActive && styles.active}`}>
        <ChatIcon active={isActive}/>
        <div className={styles.text}>Chat</div>
      </button>

      <button onClick={clickHandler} className={styles["nav-btn"]}>
        <ContactIcon />
        <div className={styles.text}>Contact</div>
      </button>

      <button onClick={clickHandler} className={styles["nav-btn"]}>
        <NotificationsIcon />
        <div className={styles.text}>Notifications</div>
      </button>

      <button onClick={clickHandler} className={styles["nav-btn"]}>
        <CalendarIcon />
        <div className={styles.text}>Calendar</div>
      </button>

      <button onClick={clickHandler} className={styles["nav-btn"]}>
        <SettingsIcon />
        <div className={styles.text}>Settings</div>
      </button>
    </nav>
  );
};

export default Navigation;
