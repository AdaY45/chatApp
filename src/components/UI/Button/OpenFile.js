import styles from "./OpenFile.module.scss";

const OpenFile = (props) => {
  return (
    <div className={styles.container}>
      <input type="file" id={props.id} style={{ opacity: "0", position: "absolute", "z-index": -1, cursor: 'pointer', width: '40px', height: "40px" }} />
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
