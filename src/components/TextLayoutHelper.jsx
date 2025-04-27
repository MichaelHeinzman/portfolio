import React from "react";
import useAnimateInView from "../hooks/useAnimateInView";
import "../css/TextLayoutHelper.css";

const TextLayoutHelper = ({ text, className = "" }) => {
  const [Motion, ref, controls, variants] = useAnimateInView();

  return (
    <Motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants.text}
      className={`text-layout-helper ${className}`}
    >
      {text}
    </Motion.div>
  );
};

export default TextLayoutHelper;
