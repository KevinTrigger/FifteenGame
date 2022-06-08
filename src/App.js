import { useState } from "react";
import PlayingField from "./components/PlayingField";

function App() {

  return (
    <div className="App h-screen flex flex-col justify-center items-center bg-slate-600">
      <PlayingField />
      <span className="text-white text-xl">Count of moves: 0</span>
      <span className="text-white text-xl">Game time: 0s</span>
    </div>
  );
}

export default App;
