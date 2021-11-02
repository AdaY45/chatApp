import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import UIContext from "./ui-context";

const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [chat, setChat] = useState({});
  const [image, setImage] = useState("");
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [messageId, setMessageId] = useState(null);
  const { errorMessage, sendRequest } = useHttp();
  const ui = useContext(UIContext);

  const login = async (email, password, setError) => {
    const response = await sendRequest({
      url: `${process.env.REACT_APP_URL}login`,
      method: "POST",
      body: {
        email,
        password,
      },
    });

    if (errorMessage) {
      setError(errorMessage);
    }

    if (response.token) {
      setToken(response.token);
      ui.setType("login");

      history.push("/auth");
    } else if (response.message) {
      return response.message;
    } else {
      return response;
    }
  };

  const register = async (email, setError) => {
    const response = await sendRequest({
      url: `${process.env.REACT_APP_URL}register`,
      method: "POST",
      body: {
        email,
      },
    });

    if (errorMessage) {
      setError(errorMessage);
    }

    console.log("token register: ", response.token);

    if (response.token) {
      setToken(response.token);
      ui.setType("register");

      history.push("/auth");
    } else if (response.message) {
      setError(response.message);
    } else {
      setError(response);
    }
  };

  const authentification = async (secretKey, setError) => {
    if (ui.type === "login") {
      const response = await sendRequest({
        url: `${process.env.REACT_APP_URL}login/secret`,
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: {
          secretKey,
        },
      });

      if (response.token) {
        setToken(response.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: response.token,
          })
        );
        history.push("/");
      } else if (response.message) {
        setError(response.message);
      }
    }
    if (ui.type === "register") {
      console.log("token auth: ", token);
      const response = await sendRequest({
        url: `${process.env.REACT_APP_URL}register/secret`,
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: {
          ...user,
          secretKey,
        },
      });

      if (response.token) {
        setToken(response.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: response.token,
          })
        );
        history.push("/");
      } else if (response.message) {
        setError(response.message);
      }
    }
  };

  const findUser = async (setError) => {
    console.log(token);
    const response = await sendRequest({
      url: `${process.env.REACT_APP_URL}find`,
      headers: {
        Authorization: token,
      },
    });
    if (errorMessage) {
      setError(errorMessage);
    }
    console.log("user", response);
    setUser(response);
    setEmail(response.email);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        login,
        register,
        authentification,
        user,
        setUser,
        chat,
        setChat,
        image,
        setImage,
        message,
        setMessage,
        email,
        setUserEmail: setEmail,
        messageId,
        setMessageId,
        findUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
