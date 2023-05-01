import { Grid } from "@mui/material";
import React from "react";
const ProfilePic = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: { lg: "340px", xs: "300px" },
        width: { lg: "340px", xs: "300px" },
      }}
    >
      <Grid
        container
        sx={{
          height: { lg: "300px", xs: "250px" },
          width: { lg: "300px", xs: "250px" },
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
