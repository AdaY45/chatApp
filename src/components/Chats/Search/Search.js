import SearchIcon from "../../UI/Icons/Chats/SearchIcon";
import Filter from "../Filter/Filter";
import Input from "../../UI/Input/Input";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input type="text" className={styles.input} placeholder="Search"/>
      <button className={styles.messages}>
        <Filter>Messages</Filter>
      </button>
    </div>
  );
};

export default Search;
