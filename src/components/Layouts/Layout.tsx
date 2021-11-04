import styles from "./Layout.module.scss";

const Layout: React.FC = (props) => {
    return <div className={styles.card}>{props.children}</div>
};

export default Layout;