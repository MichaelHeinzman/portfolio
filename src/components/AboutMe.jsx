import React from "react";
import { aboutMeText } from "../constants";
import LayoutHelper from "./LayoutHelper";
import TextLayoutHelper from "./TextLayoutHelper";

const AboutMe = () => {
  return (
    <LayoutHelper id="AboutMe" height="50vh" centerOfPage>
      <TextLayoutHelper text="About Me" className="subtitle" />
      <TextLayoutHelper text={aboutMeText} className="text" />
    </LayoutHelper>
  );
};

export default AboutMe;
