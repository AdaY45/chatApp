import { useState, useContext } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import useHttp from "../../hooks/use-http";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { Fragment } from "react";
import useInput from "../../hooks/use-input";
///import { uiActions } from "../../store/ui-slice";
//import { userActions } from "../../store/user-slice";
import UserProvider from "../../context/user-context";
import UserContext from "../../context/user-context";
import UIContext from "../../context/ui-context";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  //const dispatch = useDispatch();
  const history = useHistory();
  const user = useContext(UserContext);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const ui = useContext(UIContext);
  const { isLoading, errorMessage, sendRequest } = useHttp();
  const {
    value: email,
    isValid: emailIsValid,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => /\S+@\S+\.\S+/.test(value));

  const {
    value: password,
    isValid: passwordIsValid,
    hasErrors: passwordHasErrors,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
  );

  const onSubmit = async (event) => {
    console.log("login")
    event.preventDefault();

    if (!emailIsValid && !passwordIsValid) {
      return;
    }

    const response = await sendRequest({
      url: "http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email,
        password,
      },
    });

    if (response.token) {
      user.setUserToken(response);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: response.token,
        })
      );
      ui.setType("login");

      history.push("/auth");
    } else if(response.message) {
      setError(response.message);
    }
    console.log(response.token);

    // if (response.hasOwnProperty("errors")) {
    //   setError(true);
    //   setMessage(response.errors[0]);
    // } else {
    //   localStorage.setItem(
    //     "userData",
    //     JSON.stringify({
    //       token: response.token,
    //       userId: response.user._id,
    //       username: response.user.username,
    //       type: response.user.type,
    //       createdAt: response.createdAt,
    //     })
    //   );

    //   dispatch(uiActions.authHandler(true));
    //   dispatch(uiActions.adminHandler(response.user.type === "admin"));
    //   dispatch(userActions.addUser(response.user));
    //   dispatch(userActions.addAuth(response.token));
    //   dispatch(userActions.setUsername(response.user.username));

    //   if (response.user.type === "admin") {
    //     history.push(`/profiles/`);
    //   } else {
    //     history.push(`/profiles/${response.user._id}`);
    //   }
    // }
  };

  const emailInputStyles = emailHasErrors ? "invalid" : "";

  const passwordInputStyles = passwordHasErrors ? "invalid" : "";

  return (
    <Fragment>
      <form className={styles.form} onSubmit={onSubmit}>
        {error && <div className="error">{error}</div>}
        {emailHasErrors && <p className="error">Email is not valid</p>}
        <Input
          input={{ id: "email", type: "text", placeholder: "E-mail" }}
          className={emailInputStyles}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          data-testid="email"
        />
        {passwordHasErrors && (
          <p className="error">
            Password should be between 7 to 15 characters and contain at least
            one numeric digit and a special character.
          </p>
        )}
        <Input
          input={{ id: "username", type: "password", placeholder: "Password" }}
          className={passwordInputStyles}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          data-testid="password"
        />

        <Button data-testid="signin">Sign In</Button>
      </form>
    </Fragment>
  );
};

export default SignIn;
