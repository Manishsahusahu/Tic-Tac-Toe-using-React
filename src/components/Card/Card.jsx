import Icon from "../Icon/Icon";
import React from "react";
import "./card.css";

const Card = ({ player, onPlay, index, gameEnd }) => {
  return (
    <div className="card" onClick={() => !gameEnd && onPlay(index)}>
      <Icon name={player == "X" ? "cross" : player == "O" ? "circle" : ""} />
    </div>
  );
};

export default Card;
