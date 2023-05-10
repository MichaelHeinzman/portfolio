import { Grid } from "@mui/material";
import useAnimateInView from "../hooks/useAnimateInView";

const TextLayoutHelper = ({ text, className }) => {
  const [motion, ref, controls, variants] = useAnimateInView();

  return (
    <Grid
      item
      container
      component={motion.div}
      ref={ref}
      xs={12}
      className={className}
      justifyContent={{ xs: "center", md: "flex-start" }}
      textAlign={{ xs: "center", md: "left" }}
      variants={variants.text}
      animate={controls}
      initial="hidden"
    >
      {text}
    </Grid>
  );
};

export default TextLayoutHelper;
