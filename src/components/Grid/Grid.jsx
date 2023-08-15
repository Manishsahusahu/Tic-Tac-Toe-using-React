import React, { useState } from "react";
import "./Grid.css";
import Card from "../Card/Card";
import { isWinner } from "../helpers/checkWinner";

const Grid = ({ numberOfCards }) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn === true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if (win) setWinner(win);

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  }

  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </>
      )}
      <h1 className="turn-highlight">Current turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, index) => (
          <Card key={index} onPlay={play} player={el} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
