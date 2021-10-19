import styles from "./Layout.module.scss";

const Layout = (props) => {
    return <div className={styles.card}>{props.children}</div>
};

export default Layout;