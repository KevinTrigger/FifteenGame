import React from "react";
import "../../../../App.css";
import { Link } from "react-router-dom";
import ButtonNegative from "../ButtonNegative";
import CounterMoves from "../../../CounterMoves";
import { useEffect, useRef } from "react";

function Modal({ countMoves, victory }) {
  const openModal = useRef();

  useEffect(() => {
    if (victory)
      openModal.current.classList.remove("hidden");
  }, [victory]);

  return (
    <div
      ref={openModal}
      className="w-screen h-screen bg-transperent absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hidden"
    >
      <div className="extra-sm:w-3/4 h-1/2 laptop:w-1/4 bg-yellow-500 text-slate-200 flex flex-col justify-center text-center rounded-3xl">
        <h2 className="text-4xl text-orange-700 font-bold">Victory!</h2>
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
