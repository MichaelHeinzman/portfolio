// src/pages/Portfolio.jsx
import React, { useState } from "react";
import { LayoutHelper, Project, TextLayoutHelper } from "../components";
import { projects } from "../constants";
import "../css/Portfolio.css";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState("all");
  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  // sort by level descending
  const sorted = [...filteredProjects].sort((a, b) => b.level - a.level);

  const projectTypes = ["all", "react", "react native", "other"];

  return (
    <LayoutHelper id="Portfolio" background>
      <TextLayoutHelper text="Projects" className="subtitle" />

      {/* filter buttons */}
      <div className="filter-buttons">
        {projectTypes.map((type) => (
          <button
            key={type}
            className={
              selectedType === type
                ? "filter-btn filter-btn--active"
                : "filter-btn"
            }
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* projects grid */}
      <div className="projects-grid">
        {sorted.map((project) => (
          <Project key={project.github} {...project} />
        ))}
      </div>
    </LayoutHelper>
  );
};

export default Portfolio;
