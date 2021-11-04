import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";
import { Switch } from "react-router";
import Layout from "./components/Layouts/Layout";
import Auth from "./components/Auth/Auth";
import Authentification from "./pages/Authentification";
import Dashboard from "./pages/Dashboard";
import UserContext from "./context/user-context";
import UIContext from "./context/ui-context";

function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const user = useContext(UserContext);
  const ui = useContext(UIContext);

  useEffect(() => {
    const getToken = async () => {
      setIsReady(false);
      try {
        const data: {token: string} | null = JSON.parse(
          localStorage.getItem("userData") || '{"token":null}'
        );
        if (data !== null && data.token !== null) {
          user.setToken(data.token);
          ui.setIsAuth(true);
        }
        setIsReady(true);
      } catch (e) {
        setIsReady(false);
      }
    };

    getToken();
  }, [user]);

  if (ui.isAuth) {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Dashboard isReady={isReady} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  } else {
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
          <Redirect to={`/login`} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
