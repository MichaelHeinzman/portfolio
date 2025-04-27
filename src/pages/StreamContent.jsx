import React from "react";
import { homeIntro, streamIntro, streamPic } from "../constants";
import {
  Icon,
  LayoutHelper,
  ProfilePic,
  TextLayoutHelper,
} from "../components";

const StreamContent = () => {
  return (
    <LayoutHelper id="Home" background fullView>
      {/* Header Section */}
      <div className="home-header">
        <div className="home-text">
          <TextLayoutHelper text="Grover" className="title" />
          <TextLayoutHelper text={streamIntro} className="text" />
          <div className="home-actions">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/michael-h-00499715a/"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://github.com/MichaelHeinzman"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <ProfilePic picture={streamPic} />
        </div>
      </div>
    </LayoutHelper>
  );
};

export default StreamContent;
