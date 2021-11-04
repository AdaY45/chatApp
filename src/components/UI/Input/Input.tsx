import React from "react";
import styles from "./Input.module.scss";

interface IInput {
  [key: string]: any;
}

interface IInputProps {
  input: IInput;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
  ref: React.RefObject<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className={styles["form-control"]}>
      <input
        {...props.input}
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className ? styles[props.className] : ""}
      />
    </div>
  );
});

export default Input;
