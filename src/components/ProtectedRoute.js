import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated === true ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
