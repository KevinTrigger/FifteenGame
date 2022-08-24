import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { x: 450, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -450, opacity: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
