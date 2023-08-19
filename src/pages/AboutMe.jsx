import React from "react";
import { LayoutHelper, TextLayoutHelper } from "../components";
import { aboutMeText } from "../constants";

const AboutMe = () => {
  return (
    <LayoutHelper id="AboutMe" height="50vh" centerOfPage>
      <TextLayoutHelper text="About Me" className="subtitle" />
      <TextLayoutHelper text={aboutMeText} className="text" />
    </LayoutHelper>
  );
};

export default AboutMe;
