import { Grid } from "@mui/material";
import React from "react";
import { LayoutHelper, Project, TextLayoutHelper } from "../components";
import { projects } from "../constants";

const Portfolio = () => {
  return (
    <LayoutHelper id="Portfolio" background fullView>
      <TextLayoutHelper text="Projects" className="subtitle" />
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        gap={5}
      >
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </Grid>
    </LayoutHelper>
  );
};

export default Portfolio;
