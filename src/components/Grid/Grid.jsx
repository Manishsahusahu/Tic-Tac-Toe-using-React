import React, { useState } from "react";
import "./Grid.css";
import Card from "../Card/Card";

const Grid = ({ numberOfCards }) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  return (
    <div className="grid">
      {board.map((el, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Grid;
