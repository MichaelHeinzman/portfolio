import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import TextLayoutHelper from "../Components/TextLayoutHelper";
const AboutMe = () => {
  return (
    <LayoutHelper id="AboutMe">
      <TextLayoutHelper text="About Me" className="subtitle" />
      <TextLayoutHelper
        text="As a junior React Developer, I possess an impressive arsenal of skills
        in HTML, CSS, JavaScript, TypeScript, React and React Native. My
        expertise lies in crafting dynamic, engaging interfaces through writing
        optimized code and utilizing cutting-edge development tools and
        techniques. I am a team player who thrives in collaborating with
        cross-functional teams to produce outstanding web and mobile
        applications."
        className="text"
      />
    </LayoutHelper>
  );
};

export default AboutMe;
