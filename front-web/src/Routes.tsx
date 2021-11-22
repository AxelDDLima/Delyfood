import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
