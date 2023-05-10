import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useAnimateInView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    text: {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0 },
    },
    svg: {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
      hidden: { opacity: 0, scale: 0, x: 250 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [motion, ref, controls, variants];
};

export default useAnimateInView;
