import React from "react";
import "../CSS/Project.css";

const Project = ({ link, image, description, title }) => {
  return (
    <div className="portfolio-project">
      <img src={image} alt="pokedex project" className="project-picture" />
      <div className="project-description">
        <h3 className="project-title">{title}</h3>
        <div className="portfolio-text">{description}</div>

        <div className="project-buttons">
          <div className="icon-container">
            <img src="/githubIcon.svg" alt="github code" className="icon" />
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-text"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
