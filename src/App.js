import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";
import { Switch } from "react-router";
import Layout from "./components/Layouts/Layout";
import Auth from "./components/Auth/Auth";
import Authentification from "./pages/Authentification";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import UserContext from "./context/user-context";
import Chat from "./components/Chat/Chat";

function App() {
  const [isReady, setIsReady] = useState(false);
  // const { isLoading, error, sendRequest } = useHttp();
  const user = useContext(UserContext);

  useEffect(() => {
    const getToken = async () => {
      setIsReady(false);
      try {
        const data = JSON.parse(
          localStorage.getItem("userData") ||
            '{"token":null}'
        );
        // console.log("token: " + data.token)
        // if (data && data.token) {
        //   if (Date.now() - data.createdAt >= 60 * 60 * 24 * 30) {
        //     localStorage.removeItem("userData");
        //   } else {
        //     const dataToken = await sendRequest({
        //       url: "http://localhost:5000/api/auth/newToken",
        //       headers: {
        //         authorization: `Bearer ${data.token}`,
        //         "Content-Type": "application/json",
        //       },
        //     });
        //     const dataToStore = {
        //       token: dataToken.token,
        //       userId: dataToken.userId,
        //       username: data.username,
        //       type: dataToken.type,
        //       createdAt: dataToken.createdAt,
        //     };

        //     localStorage.setItem("userData", JSON.stringify(dataToStore));
        //     dispatch(uiActions.authHandler(true));
        //     dispatch(userActions.addAuth(dataToken.token));
        //     dispatch(uiActions.adminHandler(dataToken.type === "admin"));
        //     dispatch(userActions.setUserId(dataToken.userId));
        //     dispatch(userActions.setUsername(data.username));
        //     setIsReady(true);
        //   }
        // }
        user.setUserToken(data.token)
      } catch (e) {
        setIsReady(false);
      }
    };

    getToken();
  }, [user]);

    

  return (
    <Layout>
      <Switch>
        <Route path="/login" exact>
          <Auth isSignUp={false} />
        </Route>
        <Route path="/register" exact>
          <Auth isSignUp={true} />
        </Route>
        <Route path="/auth" exact>
          <Authentification />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Redirect to={`/login`} />
      </Switch>
    </Layout>
  );
}

export default App;
