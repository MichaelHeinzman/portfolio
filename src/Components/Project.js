import { Grid, Typography } from "@mui/material";
import React from "react";
import Icon from "../Components/Icon";
const Project = ({ link, image, description, title, order, github }) => {
  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      className="backgroundTwo shadow"
      padding={3}
      borderRadius={5}
      minHeight="20rem"
      justifyContent="center"
    >
      {image !== "" && (
        <Grid
          item
          container
          xs={12}
          md={6}
          borderRadius={5}
          overflow="hidden"
          className="shadow"
          height="auto"
          order={{ md: order && 2 }}
        >
          <img src={image} alt={title} className="image" />
        </Grid>
      )}

      <Grid
        item
        container
        xs={12}
        md={image !== "" ? 6 : 8}
        justifyContent="center"
      >
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
        <Grid
          item
          container
          xs={12}
          className="subtext"
          height="auto"
          padding={2}
        >
          <Typography textAlign="center">{description}</Typography>
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
            <a href={github} target="_blank" rel="noreferrer">
              <Icon
                src="/assets/svg/githubIcon.svg"
                alt="github code"
                className="icon"
              />
            </a>
          </Grid>
          {link && (
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
          )}
        </Grid>
        <div className="project-buttons"></div>
      </Grid>
    </Grid>
  );
};

export default Project;
