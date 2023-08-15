import Icon from "../Icon/Icon";
import React from "react";
import "./card.css";

const Card = ({ player }) => {
  return (
    <div className="card">
      <Icon name={player == "X" ? "cross" : player == "O" ? "circle" : ""} />
    </div>
  );
};

export default Card;
