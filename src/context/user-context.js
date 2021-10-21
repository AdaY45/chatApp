import React, { useState } from "react";

const UserContext = React.createContext({
  user: {},
  token: "",
  setUserToken: (token) => {},
  setUserInfo: (info) => {}
});

export const UserContextProvider = (props) => {
  const [authCode, setAuthCode] = useState(null);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const toggleAuth = (code) => {
    setAuthCode(code);
  };

  const setUserToken = (token) => {
    setToken(token);
  };

  const setUserInfo = (info) => {
    setUser(info);
  }

  return (
    <UserContext.Provider
      value={{
        authCode: authCode,
        toggleAuth: toggleAuth,
        token: token,
        setUserToken: setUserToken,
        user: user,
        setUserInfo: setUserInfo
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
