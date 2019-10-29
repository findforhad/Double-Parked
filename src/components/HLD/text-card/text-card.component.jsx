import React from "react";
import "./text-card.styles.scss";

const TextCard = ({ span, para }) => (
  <div className="hld__text__wrapper">
    <label>
      <img alt="X" src={require("../assets/sign.png")} />
    </label>
    <p>
      <span>{span}</span> {para}
    </p>
  </div>
);

export default TextCard;
