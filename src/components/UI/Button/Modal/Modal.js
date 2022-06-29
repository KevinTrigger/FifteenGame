import React from "react";
import "../../../../App.css";
import { Link } from "react-router-dom";
import ButtonReturn from "../ButtonReturn";
import { useEffect, useRef } from "react";
import {motion, AnimatePresence} from 'framer-motion';

function Modal({ countMoves, victory }) {
  const openModal = useRef();

  useEffect(() => {
    if (victory) openModal.current.classList.remove("hidden");
  }, [victory]);

  return (
    <AnimatePresence>
      {
        victory && (
          <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
        duration: 0.7,
      }}
      ref={openModal}
      className="w-screen h-screen bg-transperent absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hidden px-3"
    >
      <div className="h-1/2 w-96 bg-modal-window flex flex-col justify-center items-center rounded-3xl">
        <h2 className="text-victory text-5xl mb-7 font-bold">Victory!</h2>
        <div className="flex flex-col text-modal-text mb-12 text-xl font-medium">
          <motion.span
          initial={{
            x: -150,
            opacity: 0,
          }} 
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.6,
            duration: 1
          }}
          className="mb-2">Count of moves: {countMoves}</motion.span>
          <motion.span initial={{
            x: -150,
            opacity: 0,
          }} 
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 1
          }}>Time of play: 1s</motion.span>
        </div>
        <Link to="/">
          <ButtonReturn />
        </Link>
      </div>
    </motion.div>
        )
      }
    </AnimatePresence>
  );
}

export default Modal;
