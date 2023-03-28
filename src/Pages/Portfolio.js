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
        <Project
          image="https://vercel.com/e26051ee-d6f9-4298-950a-331cc4e54d09"
          link="https://netflix-clone-gilt-nu.vercel.app/"
          title="Netflix Clone"
          description=""
        />
      </Grid>
    </LayoutHelper>
  );
};

export default Portfolio;
