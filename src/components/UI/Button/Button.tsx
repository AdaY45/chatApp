import styles from "./Button.module.scss";

const Button: React.FC<{
    id?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = (props) => {
    return <button type="submit" id={props.id} className={styles.button} onClick={props.onClick}>{props.children}</button>
};

export default Button;