import "../App.css";
import PlayBoard from "../components/PlayBoard";
import CounterMoves from "../components/CounterMoves";
import PlayTimer from "../components/PlayTimer";
import { useState } from "react";
import Modal from "../components/UI/Button/Modal/Modal";

function Game() {
  const [countMoves, setCountMoves] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [victory, setVictory] = useState(false);

  return (
    <div className="main-screen">
      <PlayBoard
        countMoves={countMoves}
        setCountMoves={setCountMoves}
        victory={victory}
        setVictory={setVictory}
      />
      <PlayTimer timeSeconds={timeSeconds} setTimeSeconds={setTimeSeconds} />
      <CounterMoves countMoves={countMoves} />
      <Modal countMoves={countMoves} victory={victory} time={timeSeconds} />
    </div>
  );
}

export default Game;
