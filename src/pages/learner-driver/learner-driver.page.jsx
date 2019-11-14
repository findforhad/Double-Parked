import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../../components/header/header.component";
import BlockOne from "./sections/block-one/block-one.section";
import BlockTwo from "./sections/block-two/block-two.section";

import "./learner-driver.styles.scss";

const LearnerDriver = () => (
  <div className="learner__driver__wrapper">
    <Header pageTitle="Learner Driver" />
    <BlockOne />
    <BlockTwo />
    <div className="block__three">
      <Container>
        <Row>
          <Col md={7}>
            <div className="last__block__text">
              <h5>Helping Learner Drivers</h5>
              <p>
                Save yourself time, money, and effort by joining DoubleParked
                today!
              </p>
              <h6>Any questions? Get in touch today!</h6>
            </div>
          </Col>
          <Col md={5}>
            <img
              src={require("./assets/boy.png")}
              alt="boy"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default LearnerDriver;
