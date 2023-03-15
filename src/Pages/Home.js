import { Grid } from "@mui/material";
import React from "react";
import DownArrow from "../Components/DownArrow";
import ProfilePic from "../Components/ProfilePic";
import "../CSS/Home.css";
const Home = ({ homeRef, activeSelection }) => {
  return (
    <Grid
      container
      id="Home"
      ref={homeRef}
      padding={3}
      paddingTop={5}
      spacing={0}
      backgroundColor="#f9f9f9"
    >
      {/* Header */}
      <Grid
        item
        xs={12}
        container
        direction={{ xs: "row", lg: "column" }}
        justifyContent={{ xs: "center" }}
      >
        {/* Title and Text */}
        <Grid
          item
          container
          xs={12}
          order={{ xs: 2 }}
          height="50vh"
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "flex-start" }}
        >
          <Grid
            item
            container
            xs={12}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            alignItems="center"
            className="home-title"
          >
            React Developer
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            alignItems="center"
            className="home-text"
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
          order={{ xs: 1, lg: 2 }}
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <ProfilePic />
        </Grid>
      </Grid>
      <Grid item container xs={12} backgroundColor="blue">
        <div className="home-tech-stack">
          <h3 className="home-tech-title">Tech Stack</h3>
          <div className="home-tech-icons">
            <img src="/html.svg" alt="html" className="tech-icon" />
            <img src="/css.svg" alt="css" className="tech-icon" />
            <img src="/js.svg" alt="js" className="tech-icon" />
            <img src="/typescript.svg" alt="typescript" className="tech-icon" />
            <img src="/react.svg" alt="react" className="tech-icon" />
            <img src="/aws.svg" alt="aws" className="tech-icon" />
            <img src="/firebase.svg" alt="firebase" className="tech-icon" />
            <img src="/python.svg" alt="python" className="tech-icon" />
          </div>
        </div>
      </Grid>
      <DownArrow
        page="Home"
        activeSelection={activeSelection}
        nextPage="#AboutMe"
      />
    </Grid>
  );
};

export default Home;
