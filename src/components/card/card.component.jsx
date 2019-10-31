import React from "react";
import { Col } from "react-bootstrap";

import "./card.styles.scss";

const Card = ({ image, title, desc }) => (
  <Col>
    <div className="card__wrapper">
      <img src={image} alt={title} className="img-fluid" />
      <div className="card__text">
        <h4>{title}</h4>
        <div className="line"></div>
        <p>{desc}</p>
      </div>
    </div>
  </Col>
);

export default Card;
