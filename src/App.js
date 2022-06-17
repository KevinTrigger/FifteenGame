import './App.css';
import PlayBoard from "./components/PlayBoard";
import CounterMoves from "./components/CounterMoves";
import PlayTimer from "./components/PlayTimer";

function App() {


  return (
    <div className="App">
      <PlayBoard/>
      <CounterMoves />
      <PlayTimer />
    </div>
  );
}

export default App;
