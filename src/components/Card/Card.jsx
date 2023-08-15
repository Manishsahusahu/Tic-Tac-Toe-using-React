import Icon from "../Icon/Icon";
import React from "react";
import "./card.css";

const Card = ({ player, onPlay, index }) => {
  return (
    <div className="card" onClick={() => onPlay(index)}>
      <Icon name={player == "X" ? "cross" : player == "O" ? "circle" : ""} />
    </div>
  );
};

export default Card;
