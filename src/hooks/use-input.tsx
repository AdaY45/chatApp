import { useState } from "react";

const useInput = (validationFunc: Function) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const enteredValueIsValid: boolean = validationFunc(enteredValue);
  const hasErrors: boolean = !enteredValueIsValid && isTouched;

  const valueChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
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
