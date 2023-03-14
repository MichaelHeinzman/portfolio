import React from "react";
import DownArrow from "../Components/DownArrow";
import Project from "../Components/Project";
import "../CSS/Portfolio.css";

const Portfolio = ({ portfolioRef, activeSelection }) => {
  return (
    <div
      id="Portfolio"
      className="portfolio-section portfolio"
      ref={portfolioRef}
    >
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-projects">
        <Project
          image="/Pokedex.png"
          link="https://xgkgmayj3k.us-east-1.awsapprunner.com/"
          title="Pokedex"
          description="A Pokedex website that fetches pokemon from the PokeAPI and loads them into a searcheable list."
        />
      </div>
      <DownArrow
        page="Portfolio"
        activeSelection={activeSelection}
        nextPage="#Contact"
      />
    </div>
  );
};

export default Portfolio;
