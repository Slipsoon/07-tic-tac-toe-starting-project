import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayer, onGameBoardStateChange }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function changeGameBoardState(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      let newGameBoardState = [...prevGameBoard.map((row) => [...row])];
      newGameBoardState[rowIndex][colIndex] = activePlayer;
      return newGameBoardState;
    });

    onGameBoardStateChange();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => changeGameBoardState(rowIndex, columnIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
