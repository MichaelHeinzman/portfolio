import React from "react";
import DownArrow from "../Components/DownArrow";
import "../CSS/AboutMe.css";
const AboutMe = ({ activeSelection, aboutMeRef }) => {
  return (
    <div id="AboutMe" className="about" ref={aboutMeRef}>
      <h1 className="about-title">About Me</h1>
      <h3 className="about-text">
        As a junior React Developer, I possess an impressive arsenal of skills
        in HTML, CSS, JavaScript, TypeScript, React and React Native. My
        expertise lies in crafting dynamic, engaging interfaces through writing
        optimized code and utilizing cutting-edge development tools and
        techniques. I am a team player who thrives in collaborating with
        cross-functional teams to produce outstanding web and mobile
        applications.
      </h3>
      <DownArrow
        page="AboutMe"
        activeSelection={activeSelection}
        nextPage="#Portfolio"
      />
    </div>
  );
};

export default AboutMe;
