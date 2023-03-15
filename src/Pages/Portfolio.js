import { Grid } from "@mui/material";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import Project from "../Components/Project";
import TextLayoutHelper from "../Components/TextLayoutHelper";

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
        <Project
          image="/Pokedex.png"
          link="https://xgkgmayj3k.us-east-1.awsapprunner.com/"
          title="Pokedex"
          description="A Pokedex website that fetches pokemon from the PokeAPI and loads them into a searcheable list."
        />
      </Grid>
    </LayoutHelper>
  );
};

export default Portfolio;
