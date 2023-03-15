import { Grid } from "@mui/material";
import React from "react";
import "../CSS/ProfilePic.css";
const ProfilePic = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "340px",
        width: "340px",
      }}
    >
      <Grid
        container
        sx={{
          height: "300px",
          width: "300px",
          boxShadow: "inset 0 10px 20px rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
          borderRadius: 5,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <img src="/myPicture.jpg" alt="Profile" class="profile-picture" />
      </Grid>
    </Grid>
  );
};

export default ProfilePic;
