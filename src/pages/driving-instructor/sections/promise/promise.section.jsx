import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./promise.styles.scss";

const Promise = () => (
  <div className="promise__block">
    <Container>
      <Row>
        <Col md={6}>
          <span>A Name You Can Trust </span>
          <h5>DoubleParked Shows You How</h5>
          <p>
            Created by a collaboration between technical experts and instructors
            with decades of experience, we’re committed to providing an
            intuitive and easy to use platform that learners and instructors can
            access with the click of a button. By covering everything from
            scheduling to payment we make passing first time quicker and easier
            for everyone!{" "}
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Promise;
