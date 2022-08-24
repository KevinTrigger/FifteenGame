import PlaySquare from "./PlaySquare";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PlayBoard({
  countMoves,
  setCountMoves,
  victory,
  setVictory,
  setStopwatch,
}) {
  
  const [currentState, setCurrentState] = useState([]);

  const onRandomPositions = () => {
    const randomList = [];
    while (randomList.length < 16) {
      var rndValue = Math.floor(Math.random() * 16);
      if (randomList.indexOf(rndValue) === -1) randomList.push(rndValue);
    }
    return randomList;
  };

  useEffect(() => {
    const randomList = onRandomPositions();
    setCurrentState(randomList);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setStopwatch((prev) => prev + 1);
    }, 1000);
  }, [victory]);

  useEffect(() => {
    if (
      currentState.toString() ===
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0].toString()
    )
      setVictory(true);
  }, [currentState]);

  const onSwapSquares = (event) => {
    let currentValue = event.target.innerHTML;
    let zeroIndex = currentState.indexOf(0);
    let currentValueIndex = currentState.indexOf(parseInt(currentValue));

    if (
      currentValueIndex + 4 === zeroIndex ||
      currentValueIndex - 4 === zeroIndex
    ) {
      onChangeState(currentValueIndex, zeroIndex);
    } else if (currentValueIndex + 1 === zeroIndex && zeroIndex % 4 !== 0) {
      onChangeState(currentValueIndex, zeroIndex);
    } else if (
      currentValueIndex - 1 === zeroIndex &&
      (zeroIndex + 1) % 4 !== 0
    ) {
      onChangeState(currentValueIndex, zeroIndex);
    }
  };

  const onChangeState = (currentValueIndex, zeroIndex) => {
    let temArray = [...currentState];
    temArray[zeroIndex] = currentState[currentValueIndex];
    temArray[currentValueIndex] = 0;
    setCurrentState([...temArray]);
    setCountMoves(countMoves + 1);
  };

  console.log(victory);
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={
        victory && {
          opacity: 0,
        }
      }
      transition={{
        duration: 0.2,
        delay: 0.7,
      }}
      className="board-wrap"
    >
      {currentState.map((item) => {
        return <PlaySquare key={item} value={item} onSwap={onSwapSquares} />;
      })}
    </motion.div>
  );
}

export default PlayBoard;
