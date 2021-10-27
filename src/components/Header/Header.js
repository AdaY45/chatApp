import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router";
import img from "../../images/profile-image.png";
import DownIcon from "../UI/Icons/Chats/DownIcon";
import Navigation from "./Navigation/Navigation";
import useHttp from "../../hooks/use-http";
import UserContext from "../../context/user-context";
import styles from "./Header.module.scss";
import LogoutIcon from "../UI/Icons/Header/LogoutIcon";
import Loader from "../UI/Loader/Loader";

const Header = () => {
  const history = useHistory();
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const [isReady, setIsReady] = useState(false);
  const user = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      setIsReady(false)
      const response = await sendRequest({
        url: `http://localhost:3000/find`,
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json",
        },
      });

      setUserInfo(response);
      user.setUserEmail(response.email);
      setIsReady(true);
    };

    getUserInfo();
  }, [sendRequest, user.token]);

  const logoutHandler = () => {
    history.push("/login");
  };

  return (
    <header className={styles.header}>
      {isReady ? (
        <div className={styles["profile"]}>
          <img
            src={`http://localhost:3000/images/${userInfo.photo}`}
            alt="profileImg"
            className={styles.image}
          />
          <div className={styles.text}>
            <div
              className={styles.name}
            >{`${userInfo.firstName} ${userInfo.lastName}`}</div>
            <button className={styles["down-btn"]}>
              <DownIcon color="#0D1C2E" />
            </button>
          </div>
        </div>
      ) : <Loader />}

      <Navigation />

      <button className={styles.logout} onClick={logoutHandler}>
        <LogoutIcon />
        <div className={styles.text}>Logout</div>
      </button>
    </header>
  );
};

export default Header;
