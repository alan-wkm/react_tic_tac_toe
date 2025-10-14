import React, { useState } from "react";
import "./App.css";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((square, i) => (
        <button
          key={i}
          className="square"
          onClick={() => onClick(i)}
          disabled={square !== null}
          aria-label={`Square ${i + 1}`}
        >
          {square}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (board[i]) return; // Ignore if square taken

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="app-container">
      <h1>Tic Tac Toe</h1>
      <Board board={board} onClick={handleClick} />
      <div className="status-message">
        Next player: {xIsNext ? "X" : "O"}
      </div>
    </div>
  );
}
