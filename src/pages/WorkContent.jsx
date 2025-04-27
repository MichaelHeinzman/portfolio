import React from "react";
import Home from "../components/Home";
import { AboutMe, Portfolio } from "../components";

const WorkContent = () => {
  return (
    <div className="sections">
      <Home />
      <AboutMe />
      <Portfolio />
    </div>
  );
};

export default WorkContent;
