import React from "react";
import "./text-card.styles.scss";

const TextCard = ({ span, para, sign, imgHeight, pad }) => (
  <div className="hld__text__wrapper" style={{ padding: pad ? pad : "" }}>
    <label>
      <img alt="X" src={sign} height={imgHeight ? imgHeight : "16px"} />
    </label>
    <p>
      <span>{span}</span> {para}
    </p>
  </div>
);

export default TextCard;
