import "../App.css";
import PlayBoard from "../components/PlayBoard";
import CounterMoves from "../components/CounterMoves";
import PlayTimer from "../components/PlayTimer";
import { useState } from "react";
import Modal from "../components/UI/Button/Modal/Modal";

function Game() {
  const [countMoves, setCountMoves] = useState(0);

  return (
    <div className="main-screen">
      <PlayBoard countMoves={countMoves} setCountMoves={setCountMoves} />
      <PlayTimer />
      <CounterMoves countMoves={countMoves} />
      <Modal countMoves={countMoves} />
    </div>
  );
}

export default Game;
