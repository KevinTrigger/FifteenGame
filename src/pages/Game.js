import "../App.css";
import PlayBoard from "../components/PlayBoard";
import CounterMoves from "../components/CounterMoves";
import PlayTimer from "../components/PlayTimer";
import { useState } from "react";
import Modal from "../components/UI/Button/Modal/Modal";
import { CSSTransition } from "react-transition-group";

function Game() {
  const [countMoves, setCountMoves] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [victory, setVictory] = useState(false);

  return (
    <div className="main-screen play-screen">
      <PlayBoard
        countMoves={countMoves}
        setCountMoves={setCountMoves}
        victory={victory}
        setVictory={setVictory}
      />
      <CounterMoves countMoves={countMoves} />
      <CSSTransition in={victory} timeout={2000} unmountOnExit classNames='popup'>
        <Modal countMoves={countMoves} victory={victory} time={timeSeconds} />
      </CSSTransition>
    </div>
  );
}

export default Game;
