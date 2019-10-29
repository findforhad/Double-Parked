import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import mobileOne from "./assets/mob1.png";
import mobileTwo from "./assets/mob2.png";
import mobileThree from "./assets/mob3.png";
import mobileFour from "./assets/mob4.png";

import "./appintro.styles.scss";

const AppIntro = () => (
  <div className="appintro__wrapper">
    <Container>
      <Row>
        <Col md={6}>
          <Fade right cascade>
            <div className="intro__text__one">
              <h4>Pass fast with Double Parked</h4>
              <p>
                Increase your chances of passing from top rated instructors.
              </p>
            </div>
          </Fade>
        </Col>
        <Col md={6}>
          <Fade right>
            <div className="mobile__wrapper__one">
              <img alt="MobileOne" src={mobileOne} className="mobOne" />
              <img alt="MobileOne" src={mobileTwo} className="mobTwo" />
            </div>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Fade left>
            <div className="mobile__wrapper__two">
              <img alt="MobileOne" src={mobileThree} className="mobOne" />
              <img alt="MobileOne" src={mobileFour} className="mobTwo" />
            </div>
          </Fade>
        </Col>
        <Col md={6}>
          <Fade left cascade>
            <div className="intro__text__two">
              <h4>Pass fast with Double Parked</h4>
              <p>
                Increase your chances of passing from top rated instructors.
              </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AppIntro;

// .Layer_24 {
//     background-image: url("Layer 24.png");
//     position: absolute;
//     left: 1043px;
//     top: 1535px;
//     width: 225px;
//     height: 486px;
//     z-index: 147;
//   }
//   .Layer_27 {
//     background-image: url("Layer 27.png");
//     position: absolute;
//     left: 1256px;
//     top: 1567px;
//     width: 192px;
//     height: 412px;
//     z-index: 140;
//   }
