import { Box, Grid } from "@mui/material";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import TextLayoutHelper from "../Components/TextLayoutHelper";
import Icon from "../Components/Icon";

const Contact = () => {
  const handleEmailClick = (email) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      ""
    )}&body=${encodeURIComponent("")}`;
    window.open(mailtoLink);
  };
  return (
    <LayoutHelper id="Contact" width={9}>
      <TextLayoutHelper text="Contact" className="subtitle" />
      <Grid item container xs={12} gap={4} justifyContent="center">
        <Grid
          item
          container
          xs={12}
          md={5}
          className="backgroundTwo shadow"
          padding={3}
          borderRadius={5}
          minHeight="20rem"
          justifyContent="center"
        >
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            maxHeight="20%"
          >
            <Icon
              src="/assets/svg/Mail.svg"
              alt="python"
              className="tech-icon"
            />
          </Grid>
          <Grid
            item
            xs={12}
            onClick={() => handleEmailClick("mheinzman2017@gmail.com")}
            sx={{ cursor: "pointer" }}
            height="40%"
            p={3}
          >
            <div className="title small">Primary</div>
            <div className="subtext">michael@heinzman.net</div>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ cursor: "pointer" }}
            onClick={() => handleEmailClick("seth@heinzman.net")}
            height="40%"
            p={3}
          ></Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          className="backgroundTwo shadow"
          padding={3}
          borderRadius={5}
          minHeight="20rem"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            height="auto"
            maxHeight="20%"
          >
            <Icon
              src="/assets/svg/cell.svg"
              alt="python"
              className="tech-icon"
            />
          </Grid>
          <Grid item xs={12} sx={{ cursor: "pointer" }} height="80%" p={3}>
            <div className="title small">Primary</div>
            <div className="subtext">817-733-8494</div>
          </Grid>
        </Grid>
      </Grid>
    </LayoutHelper>
  );
};

export default Contact;
