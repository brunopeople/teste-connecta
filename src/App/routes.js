import react from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Login</h1>} />
            <Route path="/signup" component={() => <h1>Signup</h1>} />
            <Route path="*" component={() => <h1>Pagen Not Found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;