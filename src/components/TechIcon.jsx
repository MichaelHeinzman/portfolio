import React from "react";
import Icon from "./Icon";

const TechIcon = ({ src, alt, className = "tech-icon" }) => {
  const iconStyle = {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
    cursor: "pointer",
    display: "flex",
    height: "3.5rem",
    justifyContent: "center",
    width: "3.5rem",
  };
  return <Icon src={src} alt={alt} className={className} style={iconStyle} />;
};

export default TechIcon;
