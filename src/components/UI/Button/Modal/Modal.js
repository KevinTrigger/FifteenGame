import React from "react";
import "../../../../App.css";
import { Link } from "react-router-dom";
import ButtonReturn from "../ButtonReturn";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StartImg from "../../../../../src/assets/star-gracios.svg";

function Modal({ countMoves, victory, stopwatch }) {
  
  const openModal = useRef();
  const spanAnimateVariants = {
    initial: { opacity: 0, x: 150 },
    animate: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    if (victory) openModal.current.classList.remove("hidden");
  }, [victory]);

  console.log(stopwatch);

  return (
    <AnimatePresence>
      {victory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          ref={openModal}
          className="w-screen h-screen bg-transperent absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hidden px-3"
        >
          <div className="h-1/2 w-96 bg-modal-window flex flex-col justify-center items-center rounded-3xl relative overflow-hidden">
            <img src={StartImg} alt="Star Img" className="absolute top-1 right-1 hidden extra-sm:block extra-sm:w-24 extra-sm:h-24 sm:w-24 sm:h-24"/>
            <h2 className="text-victory text-5xl mb-7 font-bold">Victory!</h2>
            <div className="flex flex-col text-modal-text mb-12 text-xl font-medium">
              <motion.span
                variants={spanAnimateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                className="mb-2"
              >
                Count of moves: {countMoves}
              </motion.span>
            </div>
            <Link to="/">
              <ButtonReturn />
            </Link>
            <img src={StartImg} alt="Star Img" className="absolute bottom-0 left-1 rotate-180 hidden extra-sm:block extra-sm:w-24 extra-sm:h-24 sm:w-24 sm:h-24"/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
