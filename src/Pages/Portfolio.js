import { Grid } from "@mui/material";
import React from "react";
import Project from "../Components/Project";

const Portfolio = () => {
  return (
    <Grid
      container
      id="Portfolio"
      height="auto"
      padding={3}
      paddingTop={8}
      className="backgroundOne"
    >
      <Grid item xs={12} height="5%">
        <h1 className="subtitle">Portfolio</h1>
      </Grid>
      <Grid item container xs={12}>
        <Project
          image="/Pokedex.png"
          link="https://xgkgmayj3k.us-east-1.awsapprunner.com/"
          title="Pokedex"
          description="A Pokedex website that fetches pokemon from the PokeAPI and loads them into a searcheable list."
        />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
