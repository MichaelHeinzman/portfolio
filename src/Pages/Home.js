import { Button, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import ProfilePic from "../Components/ProfilePic";
import TextLayoutHelper from "../Components/TextLayoutHelper";
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

  const handleDownloadResume = () => {
    const resumeURL =
      "https://drive.google.com/file/d/1qUAGQ9ukjGznwP5nbQ2FK22_J7fv-TUJ/view?usp=sharing";
    window.open(resumeURL, "_blank");
  };

  return (
    <LayoutHelper id="Home" background fullView>
      {/* Header */}
      <Grid
        item
        xs={12}
        container
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
          lg={6}
          order={{ xs: 2, md: 1 }}
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "flex-start" }}
          gap={3}
        >
          <TextLayoutHelper text="React Developer" className="title" />
          <TextLayoutHelper
            text="Hi, I'm Michael Heinzman. A passionate React Developer based in Melbourne, Florida."
            className="text"
          />
          <Grid
            item
            container
            xs={12}
            gap={{ xs: 3, sm: 0 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              container
              xs={12}
              sm={6}
              gap={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <a
                href="https://www.linkedin.com/in/michael-heinzman-00499715a/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/linkedinIcon.svg" alt="linkedin" className="icon" />
              </a>
              <a
                href="https://github.com/MichaelHeinzman"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/githubIcon.svg" alt="github" className="icon" />
              </a>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Button
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                  color: "#f7c075",
                  fontWeight: "bold",
                }}
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Hero Picture */}
        <Grid
          item
          container
          xs={12}
          md={6}
          lg={6}
          order={{ xs: 1, md: 2 }}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <ProfilePic />
        </Grid>
      </Grid>

      {/* Tech Stack Section */}
      <Grid
        item
        container
        xs={12}
        justifyContent={{ xs: "center", md: "flex-start" }}
        alignItems="center"
        marginBottom={{ xs: 8 }}
        height={{ xs: "40vh", md: "20vh" }}
        paddingTop={{ xs: 2 }}
      >
        <Grid
          item
          container
          xs={4}
          md={1.2}
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
          marginRight={{ md: 3 }}
        >
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: { xs: "2px solid rgba(45,46,50,.5)", md: "none" },
              borderRight: { xs: "none", md: "2px solid rgba(45,46,50,.5)" },
              marginBottom: { xs: "3rem", md: "0rem" },
              marginRight: "0",
              paddingRight: "0",
              fontFamily: "Mulish,sans-serif",
              fontWeight: 600,
              color: "#2d2e32",
              textAlign: { xs: "center", md: "left" },
            }}
            height={{ md: "100%" }}
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
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
          gap={3}
          flexWrap="wrap"
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
    </LayoutHelper>
  );
};

export default Home;
