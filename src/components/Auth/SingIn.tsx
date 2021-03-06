import { useState, useContext } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { Fragment } from "react";
import useInput from "../../hooks/use-input";
import UserContext from "../../context/user-context";
import styles from "./SignIn.module.scss";
import Loader from "../UI/Loader/Loader";

const SignIn: React.FC = () => {
  const user = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    value: email,
    isValid: emailIsValid,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value: string) => /\S+@\S+\.\S+/.test(value));

  const {
    value: password,
    isValid: passwordIsValid,
    hasErrors: passwordHasErrors,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value: string) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
  );

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!emailIsValid && !passwordIsValid) {
      return;
    }

    setIsLoading(true);
    user.login(email, password, setError);
    setIsLoading(false);
  };

  const emailInputStyles: string = emailHasErrors ? "invalid" : "";

  const passwordInputStyles: string = passwordHasErrors ? "invalid" : "";

  return (
    <Fragment>
      <form className={styles.form} onSubmit={onSubmit}>
        {error && <div className="error">{error}</div>}
        {isLoading && <Loader />}
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

        <Button>Sign In</Button>
      </form>
    </Fragment>
  );
};

export default SignIn;
