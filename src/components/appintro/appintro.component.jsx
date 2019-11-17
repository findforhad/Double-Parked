import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import ScrollAnimation from "react-animate-on-scroll";

import "./appintro.styles.scss";

const AppIntro = () => (
  <div className="appintro__wrapper">
    <Container>
      <Row>
        <Col md={6}>
          <div className="intro__text__two">
            <h4>Pass fast with Double Parked</h4>
            <p>Increase your chances of passing from top rated instructors.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="mobile__wrapper__one">
            <ScrollAnimation animateIn="fadeInRight">
              <Fade right>
                <img
                  alt="MobileOne"
                  src={require("./assets/mob1.png")}
                  className="mobOne img-fluid"
                />
              </Fade>
              <Zoom>
                <img
                  alt="MobileOne"
                  src={require("./assets/mob2.png")}
                  className="mobTwo img-fluid"
                />
              </Zoom>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="mobile__wrapper__one">
            <ScrollAnimation animateIn="fadeInLeft">
              <Fade right>
                <img
                  alt="MobileOne"
                  src={require("./assets/mob3.png")}
                  className="mobOne img-fluid"
                />
              </Fade>
              <Zoom>
                <img
                  alt="MobileOne"
                  src={require("./assets/mob4.png")}
                  className="mobTwo img-fluid"
                />
              </Zoom>
            </ScrollAnimation>
          </div>
        </Col>
        <Col md={6}>
          <div className="intro__text__two">
            <h4>Pass fast with Double Parked</h4>
            <p>Increase your chances of passing from top rated instructors.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AppIntro;
