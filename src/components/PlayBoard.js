import PlaySquare from "./PlaySquare";
import { useState } from "react";
import { useEffect } from "react";

function PlayBoard() {
  const [currentState, setCurrentState] = useState([]);
  const [countChanged, setCountChanged] = useState(0);
  
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
  }, [])

  function onSwapSquares(event) {
    let currentValue = event.target.innerHTML;
    let zeroIndex = currentState.indexOf(0);
    let currentValueIndex = currentState.indexOf(parseInt(currentValue));

    if (currentValueIndex + 4 === zeroIndex || currentValueIndex - 4 === zeroIndex) {
        swap(currentValueIndex, zeroIndex);
    } else if (currentValueIndex + 1 === zeroIndex && zeroIndex % 4 !== 0 ) {
        swap(currentValueIndex, zeroIndex);
    } else if (currentValueIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
        swap(currentValueIndex, zeroIndex)
    }
  }

  function swap(currentValueIndex, zeroIndex) {
    let temArray = [...currentState]
    temArray[zeroIndex] = currentState[currentValueIndex];
    temArray[currentValueIndex] = 0;
    setCurrentState([...temArray])
    setCountChanged(countChanged + 1);
  }

  console.log(currentState)

  return (
    <div className="extra-sm:w-72 extra-sm:h-72 sm:h-96 sm:w-96 bg-gray-300 grid grid-cols-4 gap-1 border border-double p-1">
      {currentState.map((item, index) => {
        return (
          <PlaySquare key={item} index={index} value={item} onSwap={onSwapSquares}/>
        )
      })}
    </div>
  );
}

export default PlayBoard;
