import { Redirect } from "react-router";
import { Route } from "react-router";
import { Switch } from "react-router";
import Layout from "./components/Layouts/Layout";
import Auth from "./components/Auth/Auth";
import Authentification from "./pages/Authentification";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
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
        <Redirect to={`/login`} />
      </Switch>
    </Layout>
  );
}

export default App;
