import React from "react";
import { motion } from "framer-motion";

function ButtonPlay({ pageVisible }) {
  return (
    <motion.button
      className={`uppercase font-bold tracking-wider leading-none rounded-lg px-10 py-5 bg-yellow-400 text-violet-800 text-2xl`}
      type="button"
      id="btnPlay"
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.7,
        },
      }}
      whileHover={{
        transition: {
          duration: 0.2,
        },
        outline: "3px solid rgb(192, 136, 230)",
        scale: 1.2,
      }}
    >
      Start game
    </motion.button>
  );
}

export default ButtonPlay;
