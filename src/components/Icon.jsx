import React from "react";
import useAnimateInView from "../hooks/useAnimateInView.js";
import "../css/Icon.css";

const Icon = ({ src, alt, className = "", style = "" }) => {
  const [Motion, ref, controls, variants] = useAnimateInView();

  return (
    <Motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants.svg}
      style={style}
      className={`icon-wrapper ${className}`}
    >
      <img src={src} alt={alt} className="icon-img" />
    </Motion.div>
  );
};

export default Icon;
