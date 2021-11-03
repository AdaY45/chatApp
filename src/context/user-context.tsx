import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import UIContext from "./ui-context";
import { IUser, IMessage } from "../interfaces/user";
import { IChat } from "../interfaces/chat";

type UserContextObj = {
  token: string;
  user: IUser;
  chat: IChat;
  image: string;
  message: IMessage | null;
  email: string;
  messageId: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  login: (email: string, password: string, setError: Function) => void;
  register: (email: string, setError: Function) => void;
  authentification: (secretKey: string, setError: Function) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser>>
  setChat: React.Dispatch<React.SetStateAction<IChat>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<IMessage | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessageId: React.Dispatch<React.SetStateAction<string>>;
  findUser: (setError: Function) => void;
};

interface Token {
  token: string;
}

interface Message {
  message: string;
}

// type Login = Token | Message | string;

type Auth = 'token' | 'message';

const UserContext = React.createContext<UserContextObj>({} as UserContextObj);

export const UserContextProvider: React.FC = (props) => {
  const history = useHistory();
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({} as IUser);
  const [chat, setChat] = useState<IChat>({} as IChat);
  const [image, setImage] = useState<string>("");
  const [message, setMessage] = useState<IMessage | null>({} as IMessage);
  const [email, setEmail] = useState<string>("");
  const [messageId, setMessageId] = useState<string>("");
  const { error, sendRequest } = useHttp();
  const ui = useContext(UIContext);

  const login = async (email: string, password: string, setError: Function) => {
    let response: Record<Auth | string, string> = await sendRequest({
      url: `${process.env.REACT_APP_URL}login`,
      method: "POST",
      body: {
        email,
        password,
      },
    });

    //let res = response as Token;

    if (error) { 
      setError(error);
    }

    if (response.token) {
      setToken(response.token);
      ui.setType("login");

      history.push("/auth");
    }

    //let res2 = response as Message;

    if (response.message) {
      setError(response.message);
    }

    setError(response);
  };

  const register = async (email: string, setError: Function) => {
    const response: Record<Auth | string, string> = await sendRequest({
      url: `${process.env.REACT_APP_URL}register`,
      method: "POST",
      body: {
        email,
      },
    });

    if (error) {
      setError(error);
    }

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

  const authentification = async (secretKey: string, setError: Function) => {
    if (ui.type === "login") {
      const response: Record<Auth | string, string> = await sendRequest({
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
      const response: Record<Auth | string, string> = await sendRequest({
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

  const findUser = async (setError: Function) => {
    console.log(token);
    const response: IUser = await sendRequest({
      url: `${process.env.REACT_APP_URL}find`,
      headers: {
        Authorization: token,
      },
    });
    if (error) {
      setError(error);
    }
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
