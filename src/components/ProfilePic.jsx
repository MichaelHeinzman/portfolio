import React from "react";
import { profilePic } from "../constants";
import "../css/ProfilePic.css";

const ProfilePic = ({ picture = profilePic }) => (
  <div className="profile-pic-container">
    <div className="profile-pic-inner">
      <img src={picture} alt="Profile" className="profile-picture" />
    </div>
  </div>
);

export default ProfilePic;
