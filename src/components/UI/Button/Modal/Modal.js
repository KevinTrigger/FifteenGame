import React from "react";
import "../../../../App.css";
import { Link } from "react-router-dom";
import ButtonNegative from "../ButtonNegative";
import CounterMoves from "../../../CounterMoves";
import PlayTimer from "../../../PlayTimer";
import { useEffect, useRef } from "react";

function Modal({ countMoves, victory }) {
  const openModal = useRef();

  useEffect(() => {
    if (victory)
      setTimeout(() => openModal.current.classList.remove("hidden"), 300);
  }, [victory]);

  return (
    <div
      ref={openModal}
      className="w-screen h-screen bg-black bg-opacity-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hidden"
    >
      <div className="extra-sm:w-3/4 h-1/2 laptop:w-1/4 bg-slate-800 text-slate-200 flex flex-col justify-center  text-center">
        <h2 className="text-4xl">Victory! Your result:</h2>
        <div className="flex flex-col justify-center items-center mt-7">
          <CounterMoves countMoves={countMoves} />
        </div>
        <Link to="/">
          <ButtonNegative />
        </Link>
      </div>
    </div>
  );
}

export default Modal;
