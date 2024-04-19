import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function changeActivePlayer() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isPlayerActive={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isPlayerActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onGameBoardStateChange={changeActivePlayer}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
