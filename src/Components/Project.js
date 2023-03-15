import { Grid } from "@mui/material";
import React from "react";

const Project = ({ link, image, description, title }) => {
  return (
    <Grid
      item
      container
      xs={12}
      className="backgroundTwo shadow"
      padding={3}
      borderRadius={5}
      minHeight="30rem"
    >
      <Grid
        item
        container
        xs={12}
        borderRadius={5}
        overflow="hidden"
        className="shadow"
        height="auto"
      >
        <img src={image} alt="pokedex project" className="image" />
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          container
          xs={12}
          className="title small"
          justifyContent="center"
          alignItems="center"
          height="auto"
          padding={1}
          paddingTop={3}
        >
          {title}
        </Grid>
        <Grid item xs={12} className="subtext" height="auto" padding={2}>
          {description}
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="space-around"
          alignItems="center"
          paddingTop={3}
        >
          <Grid
            item
            container
            xs={6}
            className="icon-container"
            justifyContent="center"
          >
            <img src="/githubIcon.svg" alt="github code" className="icon" />
          </Grid>
          <Grid item container xs={6} justifyContent="center">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="portfolio-text"
            >
              Live Demo
            </a>
          </Grid>
        </Grid>
        <div className="project-buttons"></div>
      </Grid>
    </Grid>
  );
};

export default Project;
