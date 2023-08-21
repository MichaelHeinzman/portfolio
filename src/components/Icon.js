import { Box } from "@mui/material";
import React from "react";
import useAnimateInView from "../hooks/useAnimateInView";

const Icon = ({ src, alt, className, style }) => {
  const [motion, ref, controls, variants] = useAnimateInView();

  return (
    <Box
      sx={style}
      component={motion.div}
      variants={variants.svg}
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <img src={src} alt={alt} className={className} />
    </Box>
  );
};

export default Icon;
