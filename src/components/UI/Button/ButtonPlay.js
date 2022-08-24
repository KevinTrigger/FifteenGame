import React from "react";
import { motion } from "framer-motion";

function ButtonPlay({ pageVisible }) {

  const buttonVariants = {
    appearance: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
      },
    },
    hover: {
      scale: [1,1.1],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        repeat: Infinity,
        duration: 0.2,
        repeatType: 'reverse',
      },
    }
  }

  return (
    <motion.button
      variants={buttonVariants}
      className={`btn-play`}
      type="button"
      id="btnPlay"
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate="appearance"
      whileHover="hover"
    >
      Start game
    </motion.button>
  );
}

export default ButtonPlay;
