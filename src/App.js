import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
