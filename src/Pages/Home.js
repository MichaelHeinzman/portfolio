import React from "react";
import DownArrow from "../Components/DownArrow";
import "../CSS/Home.css";
const Home = ({ homeRef, activeSelection }) => {
  return (
    <div id="Home" className="home-section home" ref={homeRef}>
      <div className="home-header">
        <h1>React Developer</h1>
        <div className="home-text">
          Hi, I'm Michael Heinzman, a skilled React Developer based in
          Melbourne, Florida with over five years of experience building complex
          and scalable applications. My passion for React development is
          reflected in my track record of delivering innovative solutions that
          meet business requirements and exceed user expectations. I hold a
          Masters of Software Engineering from the Florida Institute of
          Technology and a Bachelors in Information Technology from the
          University of Central Florida, where I gained a deep understanding of
          software engineering principles and best practices.
        </div>
        <div className="home-header-icons">
          <img src="/linkedinIcon.svg" alt="linkedin" className="icon" />
          <img src="/githubIcon.svg" alt="github" className="icon" />
        </div>
      </div>

      <div className="home-tech-stack">
        <h3>Tech Stack |</h3>
        <div className="home-tech-icons">
          <img src="/html.svg" alt="html" className="tech-icon" />
          <img src="/css.svg" alt="css" className="tech-icon" />
          <img src="/js.svg" alt="js" className="tech-icon" />
          <img src="/typescript.svg" alt="typescript" className="tech-icon" />
          <img src="/react.svg" alt="react" className="tech-icon" />
          <img src="/aws.svg" alt="aws" className="tech-icon" />
          <img src="/firebase.svg" alt="firebase" className="tech-icon" />
          <img src="/python.svg" alt="python" className="tech-icon" />
        </div>
      </div>

      <DownArrow
        page="Home"
        activeSelection={activeSelection}
        nextPage="#AboutMe"
      />
    </div>
  );
};

export default Home;
