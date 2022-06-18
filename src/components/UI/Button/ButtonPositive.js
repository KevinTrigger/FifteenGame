import React from "react";

function ButtonPositive() {
  return (
    <button
      className="relative btn-pos mt-7 border border-white uppercase font-semibold tracking-wider leading-none"
      type="button"
    >
      <span className="absolute inset-0 bg-white"></span>
      <div className="relative px-10 py-5 bg-teal-600">Start game</div>
    </button>
  );
}

export default ButtonPositive;
