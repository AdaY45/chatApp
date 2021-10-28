import { useState, useRef, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Input from "../components/UI/Input/Input";
import useHttp from "../hooks/use-http";
import UIContext from "../context/ui-context";
import UserContext from "../context/user-context";
import styles from "./Authentification.module.scss";

const Authentification = () => {
  const firstDigitRef = useRef(null);
  const secondDigitRef = useRef(null);
  const thirdDigitRef = useRef(null);
  const fourthDigitRef = useRef(null);
  const fifthDigitRef = useRef(null);
  const sixthDigitRef = useRef(null);
  const history = useHistory(null);
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    firstDigitRef.current.focus();
  }, []);

  const errorCheck = (value) => {
    return value.trim() !== "" && value > 0 && value < 10;
  };

  const submitHandler = async () => {
    console.log(ui.type);
    console.log(user.token)
    if (
      !errorCheck(firstDigitRef.current.value) ||
      !errorCheck(secondDigitRef.current.value) ||
      !errorCheck(thirdDigitRef.current.value) ||
      !errorCheck(fourthDigitRef.current.value) ||
      !errorCheck(fifthDigitRef.current.value) ||
      !errorCheck(sixthDigitRef.current.value)
    ) {
      setError("Wrong input");
    }

    const secretKey =
      firstDigitRef.current.value +
      secondDigitRef.current.value +
      thirdDigitRef.current.value +
      fourthDigitRef.current.value +
      fifthDigitRef.current.value +
      sixthDigitRef.current.value;

      setIsLoading(true);
      user.authentification(secretKey, setError);
      setIsLoading(false);
    // if (ui.type === "login") {
    //   console.log(user.token)
    //   const response = await sendRequest({
    //     url: "http://localhost:3000/login/secret",
    //     method: "POST",
    //     headers: {
    //      'Authorization': user.token,
    //       "Content-Type": "application/json",
    //     },
    //     body: {
    //       secretKey,
    //     },
    //   });

    //   if (response.token) {
    //     user.setUserToken(response.token);
    //     console.log(response)
    //     localStorage.setItem(
    //       "userData",
    //       JSON.stringify({
    //         token: response.token,
    //       })
    //     );
    //     history.push("/");
    //   } else if (response.message) {
    //     setError(response.message);
    //   }
    // }
    // if (ui.type === "register") {
    //   const response = await sendRequest({
    //     url: "http://localhost:3000/register/secret",
    //     method: "POST",
    //     headers: {
    //       'Authorization': user.token,
    //       "Content-Type": "application/json",
    //     },
    //     body: {
    //       ...user.user,
    //       secretKey,
    //     },
    //   });

    //   if (response.token) {
    //     user.setUserToken(response.token);
    //     localStorage.setItem(
    //       "userData",
    //       JSON.stringify({
    //         token: response.token,
    //       })
    //     );
    //     history.push("/");
    //   } else if (response.message) {
    //     setError(response.message);
    //   }
    // }
  };

  const submitOnChangeHandler = () => {
    submitHandler();
  };

  const focusOnNextInputHandler = (event) => {
    const id = event.target.attributes["0"].textContent;
    if (id === "digit1") {
      secondDigitRef.current.focus();
    }
    if (id === "digit2") {
      thirdDigitRef.current.focus();
    }
    if (id === "digit3") {
      fourthDigitRef.current.focus();
    }
    if (id === "digit4") {
      fifthDigitRef.current.focus();
    }
    if (id === "digit5") {
      sixthDigitRef.current.focus();
    }
  };

  return (
    <section className={styles.authentification}>
      <h1 className="main-text">Authentication</h1>
      {error && <div className="error">{error}</div>}
      <form className={styles.numbers} onSubmit={submitHandler}>
        <Input
          input={{ id: "digit1", type: "number" }}
          onChange={focusOnNextInputHandler}
          ref={firstDigitRef}
        />

        <Input
          input={{ id: "digit2", type: "number" }}
          onChange={focusOnNextInputHandler}
          ref={secondDigitRef}
        />

        <Input
          input={{ id: "digit3", type: "number" }}
          onChange={focusOnNextInputHandler}
          ref={thirdDigitRef}
        />

        <Input
          input={{ id: "digit4", type: "number" }}
          onChange={focusOnNextInputHandler}
          ref={fourthDigitRef}
        />

        <Input
          input={{ id: "digit5", type: "number" }}
          onChange={focusOnNextInputHandler}
          ref={fifthDigitRef}
        />

        <Input
          input={{ id: "digit6", type: "number" }}
          ref={sixthDigitRef}
          onChange={submitOnChangeHandler}
        />
      </form>
    </section>
  );
};

export default Authentification;
