import React from "react";
import styles from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles["form-control"]}>
          <input {...props.input} ref={ref} onChange={props.onChange} onBlur={props.onBlur} data-testid={props["data-testid"] ? props["data-testid"] : ""} className={props.className ? styles[props.className] : ''}/>
        </div>
    );
});

export default Input;