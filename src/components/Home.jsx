// src/pages/Home.jsx
import React from "react";
import {
  LayoutHelper,
  TextLayoutHelper,
  ProfilePic,
  Icon,
  TechIcon,
} from "./index";
import { homeIntro } from "../constants";
import "../css/Home.css";

const Home = () => {
  const handleDownloadResume = () => {
    const resumeURL = "/assets/pdfs/Michael_Heinzman_Resume.pdf";
    window.open(resumeURL, "_blank");
  };

  return (
    <LayoutHelper id="Home" background fullView>
      {/* Header Section */}
      <div className="home-header">
        <div className="home-text">
          <TextLayoutHelper text="Software Engineer" className="title" />
          <TextLayoutHelper text={homeIntro} className="text" />
          <div className="home-actions">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/michael-h-00499715a/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  src="/assets/svg/linkedinIcon.svg"
                  alt="linkedin"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/MichaelHeinzman"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  src="/assets/svg/githubIcon.svg"
                  alt="github"
                  className="icon"
                />
              </a>
            </div>
            <button className="resume-button" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
        <div className="home-hero">
          <ProfilePic />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <div className="tech-label">Tech Stack</div>
        <div className="tech-icons">
          <TechIcon src="/assets/svg/html.svg" alt="html" />
          <TechIcon src="/assets/svg/css.svg" alt="css" />
          <TechIcon src="/assets/svg/js.svg" alt="js" />
          <TechIcon src="/assets/svg/typescript.svg" alt="typescript" />
          <TechIcon src="/assets/svg/react.svg" alt="react" />
          <TechIcon src="/assets/svg/aws.svg" alt="aws" />
          <TechIcon src="/assets/svg/firebase.svg" alt="firebase" />
          <TechIcon src="/assets/svg/python.svg" alt="python" />
        </div>
      </div>
    </LayoutHelper>
  );
};

export default Home;
