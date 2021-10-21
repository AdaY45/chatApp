import { useHistory } from "react-router";
import img from "../../images/profile-image.png";
import DownIcon from "../UI/Icons/Chats/DownIcon";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.scss";
import LogoutIcon from "../UI/Icons/Header/LogoutIcon";

const Header = () => {
    const history = useHistory();
    
    const logoutHandler = () => {
        history.push('/login');
    };

    return <header className={styles.header}>
        <div className={styles["profile"]}>
            <img src={img} alt="profileImg" />
            <div className={styles.text}>
                <div className={styles.name}>Henry Jabbawockiez</div>
                <button className={styles["down-btn"]}>
                    <DownIcon color="#0D1C2E" />
                </button>
            </div>
        </div>

        <Navigation />

        <button className={styles.logout} onClick={logoutHandler}>
            <LogoutIcon />
            <div className={styles.text}>Logout</div>
        </button>
    </header>
};

export default Header;