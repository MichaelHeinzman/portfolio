import { Grid } from "@mui/material";
import React from "react";

const LayoutHelper = ({ id, background, children, width, fullView }) => {
  return (
    <Grid
      id={id}
      container
      height={{ md: fullView ? "100vh" : "auto" }}
      minHeight={{ xs: fullView ? "100vh" : "auto" }}
      padding={3}
      paddingTop={8}
      className={background ? "backgroundOne" : "backgroundTwo"}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        item
        container
        xs={12}
        md={width ? width : 6}
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
        gap={1}
      >
        {children}
      </Grid>
    </Grid>
  );
};
export default LayoutHelper;
