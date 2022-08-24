import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Game from "../pages/Game";
import Welcome from "../pages/Welcome";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

  return (
    <AnimatePresence >
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
