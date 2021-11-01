import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import DownIcon from "../UI/Icons/Chats/DownIcon";
import Navigation from "./Navigation/Navigation";
import UserContext from "../../context/user-context";
import styles from "./Header.module.scss";
import LogoutIcon from "../UI/Icons/Header/LogoutIcon";
import Loader from "../UI/Loader/Loader";

const Header = (props) => {
  const history = useHistory();
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const user = useContext(UserContext);

  useEffect(() => {
    const getUserInfo = async () => {
      setIsReady(false);
      if (props.isReady) {
        await user.findUser(setError);
        setIsReady(true);
      }
    };

    getUserInfo();
  }, [props.isReady]);

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    user.setToken("");
    history.push("/login");
  };

  return (
    <header className={styles.header}>
      {isReady ? (
        <div className={styles["profile"]}>
          {error && <div className="error">{error}</div>}
          <img
            src={`http://localhost:3000/images/${user.user.photo}`}
            alt="profileImg"
            className={styles.image}
          />
          <div className={styles.text}>
            <div
              className={styles.name}
            >{`${user.user.firstName} ${user.user.lastName}`}</div>
            <button className={styles["down-btn"]}>
              <DownIcon color="#0D1C2E" />
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      <Navigation />

      <button className={styles.logout} onClick={logoutHandler}>
        <LogoutIcon />
        <div className={styles.text}>Logout</div>
      </button>
    </header>
  );
};

export default Header;
