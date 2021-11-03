import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validationFunc(enteredValue);
  const hasErrors = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasErrors,
    valueChangeHandler,
    inputBlurHandler,
    setValue: setEnteredValue
  };
};

export default useInput;
