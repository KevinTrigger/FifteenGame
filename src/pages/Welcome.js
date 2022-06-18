import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPositive from "../components/UI/Button/ButtonPositive";

function Welcome() {
  return (
    <div className="main-screen welcome-screen">
      <h1 className="text-6xl text-slate-200 font-semibold">Puzzle Fifteen</h1>
      <Link to="/game">
        <ButtonPositive/>
      </Link>
    </div>
  );
}

export default Welcome;