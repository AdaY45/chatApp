import styles from "./OpenFile.module.scss";

const OpenFile = (props) => {
  return (
    <div className={styles.container}>
      <input
        type="file"
        accept={props.accept ? props.accept : ""}
        id={props.id}
        style={{
          opacity: "0",
          position: "absolute",
          zIndex: 3,
          cursor: "pointer",
          width: "40px",
          height: "40px",
        }}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>
        {" "}
        <button className={styles["open-file"]}>{props.children}</button>
      </label>
    </div>
  );
};

export default OpenFile;
