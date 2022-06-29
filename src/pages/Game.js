import "../App.css";
import PlayBoard from "../components/PlayBoard";
import CounterMoves from "../components/CounterMoves";
import { useState } from "react";
import Modal from "../components/UI/Button/Modal/Modal";
import {motion} from 'framer-motion';

function Game() {
  const [countMoves, setCountMoves] = useState(0);
  const [victory, setVictory] = useState(false);

  return (
    <div className="main-screen">
      <PlayBoard
        countMoves={countMoves}
        setCountMoves={setCountMoves}
        victory={victory}
        setVictory={setVictory}
      />
      <CounterMoves countMoves={countMoves} />
      <Modal countMoves={countMoves} victory={victory} />
    </div>
  );
}

export default Game;
