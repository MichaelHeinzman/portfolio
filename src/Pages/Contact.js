import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import TextLayoutHelper from "../Components/TextLayoutHelper";
const iconStyle = {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  height: "3.5rem",
  justifyContent: "center",
  width: "3.5rem",
};

const Contact = () => {
  const handleEmailClick = (email) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      ""
    )}&body=${encodeURIComponent("")}`;
    window.open(mailtoLink);
  };
  return (
    <LayoutHelper id="Contact">
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
            <Box sx={iconStyle}>
              <img src="/Mail.svg" alt="python" className="tech-icon" />
            </Box>
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
            <div className="subtext">mheinzman2017@gmail.com</div>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ cursor: "pointer" }}
            onClick={() => handleEmailClick("seth@heinzman.net")}
            height="40%"
            p={3}
          >
            <div className="title small">Personal</div>
            <div className="subtext">seth@heinzman.net</div>
          </Grid>
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
            <Box sx={iconStyle}>
              <img src="/Cell.svg" alt="python" className="tech-icon" />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ cursor: "pointer" }} height="80%" p={3}>
            <div className="title small">Personal</div>
            <div className="subtext">817-733-8494</div>
          </Grid>
        </Grid>
      </Grid>
    </LayoutHelper>
  );
};

export default Contact;
