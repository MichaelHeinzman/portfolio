import { Grid } from "@mui/material";
import React from "react";

const TextLayoutHelper = ({ text, className }) => {
  return (
    <Grid
      item
      container
      xs={12}
      className={className}
      justifyContent={{ xs: "center", md: "flex-start" }}
      textAlign={{ xs: "center", md: "left" }}
    >
      {text}
    </Grid>
  );
};

export default TextLayoutHelper;
