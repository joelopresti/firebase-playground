import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Login = ({ handleLogin }) => {
  return (
    <>
      <Typography variant="h3">Please Login</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Login;
