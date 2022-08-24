import "../App.css";
import PlayBoard from "../components/PlayBoard";
import CounterMoves from "../components/CounterMoves";
import { useState } from "react";
import Modal from "../components/UI/Button/Modal/Modal";
import ButtonRestart from "../components/UI/Button/ButtonRestart";
import AnimatedPage from "../components/AnimatedPage";
import ButtonReturn from "../components/UI/Button/ButtonReturn";

function Game() {
  const [countMoves, setCountMoves] = useState(0);
  const [victory, setVictory] = useState(false);
  const [stopwatch, setStopwatch] = useState(0);

  return (
    <div className="main-screen">
      <AnimatedPage>
        <PlayBoard
          countMoves={countMoves}
          setCountMoves={setCountMoves}
          victory={victory}
          setVictory={setVictory}
          setStopwatch={setStopwatch}
        />
        <CounterMoves countMoves={countMoves} />
        <Modal
          countMoves={countMoves}
          victory={victory}
          setVictory={setVictory}
          stopwatch={stopwatch}
        />
      </AnimatedPage>
    </div>
  );
}

export default Game;
