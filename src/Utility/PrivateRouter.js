// PRIVATE ROUTE SETUP

import isAuth from "./isAuth";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext/UserContext";

export const PrivateRoute = props => {
  const context = useContext(UserContext);

  return isAuth(context.isLoggedIn) ? (
    <Route exact={props.exact} path={props.path} component={props.component} />
  ) : (
    <Redirect to="/signin" />
  );
};

export const RouterLink = props => {
  return isAuth() ? <Redirect to="/" /> : <Route exact={props.exact} path={props.path} component={props.component} />;
};
