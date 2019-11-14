import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import TextCard from "../../../../components/HLD/text-card/text-card.component";

import "./block-two.styles.scss";

const BlockTwo = () => (
  <div className="new__approach">
    <Container>
      <Row>
        <Col md={4}>
          <img
            src={require("../../assets/anp-g.png")}
            alt="anp"
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <div className="approach_text_wrapper">
            <span>A Name You Can Trust </span>
            <h5>A New Approach</h5>
            <p>
              DoubleParked uses unrivaled industry knowledge and experience to
              make life easier for students and instructors:
            </p>
            <TextCard
              span="Student"
              para="Pass Faster"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Student"
              para="Find Better Deals"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Student"
              para="Their Perfect Instructor"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BlockTwo;
