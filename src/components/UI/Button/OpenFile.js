import { Fragment } from "react";
import styles from "./OpenFile.module.scss";

const OpenFile = (props) => {
  return (
    <div className={styles.container}>
      <input type="file" id={props.id} style={{ display: "none" }} />
      <label for={props.id}>
        {" "}
        <button className={styles["open-file"]}>
          {props.children}
        </button>
      </label>
    </div>
  );
};

export default OpenFile;
