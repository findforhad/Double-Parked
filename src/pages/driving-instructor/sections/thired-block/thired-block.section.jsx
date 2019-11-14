import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

import "./thired-block.styles.scss";

const ThiredBlock = () => (
  <div className="thired__block">
    <Container>
      <Row>
        <Col md={6}>
          <img
            src={require("../../assets/thirdb-bg.png")}
            alt="driving"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <Fade>
            <div className="thired_block__text">
              <p>
                Leave the days of flicking frantically through your diary at the
                side of the road behind, and keep everything you need right here
                at doubleparked.co.uk. Perfect for finding anything and
                everything in an instant!
              </p>
              <h4>The Helping Hand You Need!</h4>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ThiredBlock;
