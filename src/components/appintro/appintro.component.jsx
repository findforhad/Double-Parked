import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
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
          <div className="intro__text__one">
            <h4>Pass fast with Double Parked</h4>
            <p>Increase your chances of passing from top rated instructors.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="mobile__wrapper__one">
            <Fade right>
              <img
                alt="MobileOne"
                src={mobileOne}
                className="mobOne img-fluid"
              />
            </Fade>
            <Zoom>
              <img
                alt="MobileOne"
                src={mobileTwo}
                className="mobTwo img-fluid"
              />
            </Zoom>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {/* <div className="mobile__wrapper__two">
            <Fade left>
              <img
                alt="MobileOne"
                src={mobileThree}
                className="mobOne img-fluid"
              />
            </Fade>
            <Zoom>
              <img
                alt="MobileOne"
                src={mobileFour}
                className="mobTwo img-fluid"
              />
            </Zoom>
          </div> */}
          <div className="mobile__wrapper__one">
            <Fade right>
              <img
                alt="MobileOne"
                src={mobileOne}
                className="mobOne img-fluid"
              />
            </Fade>
            <Zoom>
              <img
                alt="MobileOne"
                src={mobileTwo}
                className="mobTwo img-fluid"
              />
            </Zoom>
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
// .iphone_x_frame_copy_2 {
//   background-image: url("iphone-x-frame copy 2.png");
//   position: absolute;
//   left: 609px;
//   top: 2108px;
//   width: 316px;
//   height: 573px;
//   z-index: 126;
// }.iphone_x_frame_copy {
//   background-image: url("iphone-x-frame copy.png");
//   position: absolute;
//   left: 1243px;
//   top: 1554px;
//   width: 219px;
//   height: 437px;
//   z-index: 139;
// }
