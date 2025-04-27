import React from "react";
import Icon from "./Icon";
import "../css/Project.css";

const Project = ({ link, image, description, title, order, github, pdf }) => {
  return (
    <div className="project-card backgroundTwo shadow">
      {image && (
        <a
          href={link}
          target="_blank"
          className="project-image-container shadow"
          style={{ order: order || 0 }}
        >
          <img src={image} alt={title} className="project-image" />
        </a>
      )}

      <div className={`project-details ${image ? "with-image" : "no-image"}`}>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Icon
                src="/assets/svg/githubIcon.svg"
                alt="GitHub code"
                className="icon"
              />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Live Demo
            </a>
          )}
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View Report
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
