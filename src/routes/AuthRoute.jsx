import React from "react";
import { Route, Redirect } from "react-router-dom";

import Loading from "@pages/Intro/Loading";

const AuthRoute = ({
  loading,
  authenticated,
  render,
  component: Component,
  location,
  componentProps,
  ...rest
}) => {
  if (loading) {
    return <Loading />;
  }
  if (!authenticated) {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        render ? render(props) : <Component {...props} {...componentProps} />
      }
    />
  );
};

export default AuthRoute;
