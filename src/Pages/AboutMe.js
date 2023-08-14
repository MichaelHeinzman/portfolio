import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import TextLayoutHelper from "../Components/TextLayoutHelper";
const AboutMe = () => {
  return (
    <LayoutHelper id="AboutMe" height="50vh" centerOfPage>
      <TextLayoutHelper text="About Me" className="subtitle" />
      <TextLayoutHelper
        text="As a React Developer with a solid academic foundation, holding a Masters in Software Engineering, I bring a wealth of knowledge and expertise to the table. My proficiency extends beyond the realms of React and React Native, encompassing various programming languages and web development practices. My journey as a developer has equipped me with a diverse skill set that includes not only HTML, CSS, JavaScript, and TypeScript, but also extends to other programming languages. This holistic perspective enables me to craft dynamic and captivating interfaces while writing optimized code. My experience underscores my ability to harness cutting-edge development tools and techniques to ensure the creation of exceptional web and mobile applications. Beyond my technical prowess, I shine as a collaborative team player. Working seamlessly with cross-functional teams, I am adept at translating ideas into tangible, outstanding applications. My passion for creating impactful software solutions, coupled with my academic and practical background, positions me as a valuable asset in delivering remarkable results."
        className="text"
      />
    </LayoutHelper>
  );
};

export default AboutMe;
