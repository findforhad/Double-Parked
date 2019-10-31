import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Slide } from "react-reveal";

import "./promise.styles.scss";

const Promise = () => (
  <div className="promise__wrapper">
    <Container>
      <div className="promise__container">
        <Row className="justify-content-md-center ">
          <Col md={{ offset: 1, span: 4 }} className="image-res">
            <Slide bottom>
              <img
                alt="Phone"
                src={require("./assets/phone.png")}
                className="img-fluid"
              />
              <span>A Name You Can Trust</span>
            </Slide>
          </Col>
          <Col md={6}>
            <div className="promise__text__wrapper">
              <span>A Name You Can Trust</span>
              <h4>The DoubleParked Promise</h4>
              <div className="line"></div>
              <p>
                Created by a collaboration between technical experts and
                instructors with decades of experience, we’re committed to
                providing an intuitive and easy to use platform that learners
                and instructors can access with the click of a button. By
                covering everything from scheduling to payment we make passing
                first time quicker and easier for everyone!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Promise;
