import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SingIn";

import styles from "./Auth.module.scss";

const Auth: React.FC<{isSignUp: boolean}> = (props) => {
  return (
    <section className={styles.auth}>
      <div className={styles["auth-btn"]}>
        <NavLink to="/login" activeClassName={styles['is-active']} className="main-text">Sign In</NavLink>
        <div className={styles.dash}><div>/</div></div>
        <NavLink to="/register" activeClassName={styles['is-active']} className="main-text">Sign Up</NavLink>
      </div>
      {props.isSignUp ? <SignUp /> : <SignIn />}
    </section>
  );
};

export default Auth;
