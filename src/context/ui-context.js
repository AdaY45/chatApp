import React, { useState } from "react";

const UIContext = React.createContext({
  type: "",
  setType: (type) => {},
});

export const UIContextProvider = (props) => {
  const [type, setType] = useState("");

  const setTypeForAuth = (type) => {
    setType(type);
  };

  return (
    <UIContext.Provider value={{ type: type, setType: setTypeForAuth }}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
