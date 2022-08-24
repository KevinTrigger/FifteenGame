import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlay from "../components/UI/Button/ButtonPlay";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

function Welcome() {
  const [pageVisible, setPageVisible] = useState(false);
  const animateVariants = {
    initial: {x: -350, opacity: 0},
    animate: {x: 0, opacity: 1}
  }

  useEffect(() => {
    setPageVisible(!pageVisible);
  }, []);
  return (
    <div className={`main-screen welcome-screen`}>
      <AnimatedPage>
        <div>
          <motion.h1
            className={`game-title`}
            variants={animateVariants}
            initial="initial"
            animate="animate"
          >
            Puzzle Fifteen
          </motion.h1>
          <Link to="/game">
            <ButtonPlay pageVisible={pageVisible} />
          </Link>
        </div>
      </AnimatedPage>
    </div>
  );
}

export default Welcome;
