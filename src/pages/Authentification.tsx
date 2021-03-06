import { useState, useRef, useContext, useEffect } from "react";
import Input from "../components/UI/Input/Input";
import UIContext from "../context/ui-context";
import UserContext from "../context/user-context";
import styles from "./Authentification.module.scss";

const Authentification = () => {
  const firstDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const secondDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const thirdDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const fourthDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const fifthDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const sixthDigitRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ui = useContext(UIContext);
  const user = useContext(UserContext);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    firstDigitRef.current.focus();
  }, []);

  const errorCheck = (value: string) => {
    return value.trim() !== "" && +value > 0 && +value < 10;
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
  };

  const submitOnChangeHandler = () => {
    submitHandler();
  };

  const focusOnNextInputHandler = (event: React.ChangeEvent) => {
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
