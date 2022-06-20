import React from "react";

function ButtonPositive() {
  return (
    <button
      className="btn-pos relative mt-10 uppercase font-bold tracking-wider leading-none rounded-lg"
      type="button"
    >
      <span className="absolute inset-0 rounded-lg"></span>
      <div className="relative px-10 py-5 bg-yellow-400 rounded-lg text-violet-800 text-2xl">Start game</div>
    </button>
  );
}

export default ButtonPositive;
