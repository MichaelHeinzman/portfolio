import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProfilePic from "../Components/ProfilePic";
const Home = () => {
  const iconStyle = {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
    cursor: "pointer",
    display: "flex",
    height: "3.5rem",
    justifyContent: "center",
    width: "3.5rem",
  };
  return (
    <Grid
      container
      id="Home"
      padding={3}
      paddingTop={8}
      spacing={0}
      className="backgroundOne"
      justifyContent="center"
      alignItems="center"
      height={{ md: "100vh" }}
    >
      {/* Header */}
      <Grid
        item
        xs={12}
        md={8}
        container
        direction="row"
        justifyContent={{ xs: "center", md: "center" }}
        alignItems={{ xs: "center", md: "center" }}
        height={{ md: "70%" }}
        paddingBottom={{ xs: 4 }}
      >
        {/* Title and Text */}
        <Grid
          item
          container
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}
          height={{ xs: "50vh", md: "55%" }}
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "flex-start" }}
          padding={{ md: 3 }}
        >
          <Grid
            item
            container
            xs={12}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            className="title"
            textAlign={{ md: "left" }}
          >
            React Developer
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            alignItems="center"
            className="text"
            textAlign={{ md: "left" }}
          >
            Hi, I'm Michael Heinzman. A passionate React Developer based in
            Melbourne, Florida.
          </Grid>
          <Grid
            item
            container
            xs={12}
            gap={2}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            alignItems="center"
          >
            <img src="/linkedinIcon.svg" alt="linkedin" className="icon" />
            <img src="/githubIcon.svg" alt="github" className="icon" />
          </Grid>
        </Grid>

        {/* Hero Picture */}
        <Grid
          item
          container
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}
          justifyContent="center"
          alignItems="center"
          height={{ xs: "50vh", md: "70%" }}
        >
          <ProfilePic />
        </Grid>
      </Grid>

      {/* Tech Stack Section */}
      <Grid
        item
        container
        xs={12}
        md={8}
        justifyContent={{ xs: "center", md: "flex-start" }}
        marginBottom={{ xs: 8 }}
        height={{ xs: "40vh", md: "30%" }}
        padding={{ md: 3 }}
        paddingTop={{ xs: 2 }}
      >
        <Grid
          item
          container
          xs={4}
          md={1.2}
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
          height={{ md: "100%" }}
          marginRight={{ md: 3 }}
        >
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: { xs: "2px solid rgba(45,46,50,.5)", md: "none" },
              borderRight: { xs: "none", md: "2px solid rgba(45,46,50,.5)" },
              marginBottom: { xs: "3rem" },
              marginRight: "0",
              paddingRight: "0",
              fontFamily: "Mulish,sans-serif",
              fontWeight: 600,
              color: "#2d2e32",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Tech Stack
          </Grid>
        </Grid>
        {/* Tech Icons */}
        <Grid
          item
          container
          md={8}
          xs={12}
          justifyContent="center"
          alignItems="center"
          gap={3}
          flexWrap="wrap"
          height={{ md: "100%" }}
        >
          <Box sx={iconStyle}>
            <img src="/html.svg" alt="html" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/css.svg" alt="css" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/js.svg" alt="js" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/typescript.svg" alt="typescript" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/react.svg" alt="react" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/aws.svg" alt="aws" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/firebase.svg" alt="firebase" className="tech-icon" />
          </Box>
          <Box sx={iconStyle}>
            <img src="/python.svg" alt="python" className="tech-icon" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
