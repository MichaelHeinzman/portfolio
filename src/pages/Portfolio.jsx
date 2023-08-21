import { Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { LayoutHelper, Project, TextLayoutHelper } from "../components";
import { projects } from "../constants";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState("all"); // Default to show all projects
  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  // Sort filtered projects by level in descending order
  filteredProjects.sort((a, b) => b.level - a.level);

  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  const projectTypes = ["all", "react", "react native", "other"];

  return (
    <LayoutHelper id="Portfolio" background fullView>
      <TextLayoutHelper text="Projects" className="subtitle" />

      {/* Type filter buttons */}
      <Grid item container xs={12} gap={3}>
        {projectTypes.map((type) => (
          <Button
            key={type}
            style={
              selectedType === type
                ? { backgroundColor: "#f88d3a", color: "#ffffff" } // Adjusted colors for contained type
                : { color: "#f88d3a", borderColor: "#f88d3a" } // Colors for outlined type
            }
            onClick={() => handleTypeFilter(type)}
            variant={selectedType === type ? "contained" : "outlined"}
          >
            {type}
          </Button>
        ))}
      </Grid>

      {/* Display filtered projects */}
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        gap={5}
      >
        {filteredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Grid>
    </LayoutHelper>
  );
};

export default Portfolio;
