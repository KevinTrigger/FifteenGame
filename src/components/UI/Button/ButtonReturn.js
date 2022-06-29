import React from "react";
import { motion } from "framer-motion";

function ButtonReturn() {
  return (
    <motion.button
      className="uppercase font-semibold tracking-wider leading-none rounded-lg bg-blueBtn py-4 px-5 text-banana text-xl"
      type="button"
      initial={{
        y: 70,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.8,
        }
      }}
      whileHover={{
        scale: 1.1,
      }}

    >
      Main menu
    </motion.button>
  );
}

export default ButtonReturn;
