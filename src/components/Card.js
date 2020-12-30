import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Card = () => {
  return (
    <Grid item sm={12} md={6} lg={6}>
      <Paper style={{ height: 150, width: "100%", backgroundColor: "white" }} />
    </Grid>
  );
};

export default Card;
