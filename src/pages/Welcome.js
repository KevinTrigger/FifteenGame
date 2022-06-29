import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlay from "../components/UI/Button/ButtonPlay";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Welcome() {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    setPageVisible(!pageVisible);
  }, []);
  return (
    <div className={`main-screen welcome-screen`}>
      <div>
        <motion.h1
          className={`mb-10 extra-sm:text-5xl sm:text-7xl text-slate-200 font-bold`}
          initial={{
            x: -350,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Puzzle Fifteen
        </motion.h1>
        <Link to="/game">
          <ButtonPlay pageVisible={pageVisible} />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
