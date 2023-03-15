import { Grid } from "@mui/material";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import TextLayoutHelper from "../Components/TextLayoutHelper";
const Contact = () => {
  return (
    <LayoutHelper id="Contact">
      <TextLayoutHelper text="Contact" className="subtitle" />
      <Grid
        item
        container
        xs={12}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <img src="/Mail.svg" alt="Mail Contact" className="contact-mail" />
      </Grid>
    </LayoutHelper>
  );
};

export default Contact;
