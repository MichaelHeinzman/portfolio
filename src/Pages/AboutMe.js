import { Grid } from "@mui/material";
import React from "react";
const AboutMe = () => {
  return (
    <Grid
      container
      id="AboutMe"
      height={{ xs: "100vh", sm: "60vh", md: "40vh" }}
      padding={3}
      paddingTop={8}
      paddingBottom={{ md: 8 }}
      className="backgroundTwo"
    >
      <Grid item xs={12}>
        <h1 className="subtitle">About Me</h1>
      </Grid>
      <Grid item xs={12}>
        <h3 className="text">
          As a junior React Developer, I possess an impressive arsenal of skills
          in HTML, CSS, JavaScript, TypeScript, React and React Native. My
          expertise lies in crafting dynamic, engaging interfaces through
          writing optimized code and utilizing cutting-edge development tools
          and techniques. I am a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web and mobile
          applications.
        </h3>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
