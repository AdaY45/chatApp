import DownIcon from "../../UI/Icons/Chats/DownIcon";
import styles from "./Filter.module.scss";

const Filter = (props) => {
  return (
    <div className={styles.filter}>
      <div className={styles["filter-text"]}>{props.children}</div>

      <div className={styles.icon}>
        <DownIcon />
      </div>
    </div>
  );
};

export default Filter;
