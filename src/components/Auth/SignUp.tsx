import { useState, useContext } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { Fragment } from "react";
import useInput from "../../hooks/use-input";
import  UserContext from "../../context/user-context";
import styles from "./SignUp.module.scss";
import Loader from "../UI/Loader/Loader";

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useContext(UserContext);
  const [error, setError] = useState<string>("");
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value: string) => value.trim() !== "");

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

    if (
      !emailIsValid &&
      !passwordIsValid &&
      !firstNameIsValid &&
      !lastNameIsValid
    ) {
      return;
    }

    setIsLoading(true);
    user.setUser({id: "", firstName, lastName, email, photo: ""});
    user.register(email, setError);
    setIsLoading(false);
  };

  const emailInputStyles = emailHasErrors ? "invalid" : "";

  const passwordInputStyles = passwordHasErrors ? "invalid" : "";

  const firstNameInputStyles = firstNameHasErrors ? "invalid" : "";
  const lastNameInputStyles = lastNameHasErrors ? "invalid" : "";

  return (
    <Fragment>
      {error && <div className="error">{error}</div>}
      {isLoading && <Loader />}
      <form className={styles.form} onSubmit={onSubmit}>
        {firstNameHasErrors && (
          <p className="error">First Name should not be empty</p>
        )}
        <Input
          input={{ id: "firstName", type: "text", placeholder: "First name" }}
          className={firstNameInputStyles}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          data-testid="firstname"
        />

        {lastNameHasErrors && (
          <p className="error">Last Name should not be empty</p>
        )}
        <Input
          input={{ id: "lastName", type: "text", placeholder: "Last Name" }}
          className={lastNameInputStyles}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          data-testid="lastname"
        />
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
          input={{ id: "password", type: "password", placeholder: "Password" }}
          className={passwordInputStyles}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          data-testid="password"
        />

        <Button>Sign up</Button>

      </form>
    </Fragment>
  );
};

export default SignUp;
