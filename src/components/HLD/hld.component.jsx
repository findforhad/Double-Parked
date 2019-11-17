import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import TextCard from "./text-card/text-card.component";
import { Link } from "react-router-dom";

import "./hld.styles.scss";

const HLD = () => (
  <Container>
    <div className="hld__wrapper">
      <Row>
        <Col md={6}>
          <Fade>
            <h4>Helping Learner Drivers</h4>
            <div className="line"></div>
            <p>
              Finding an instructor can be a tricky business. With the best in
              the business seemingly forever booked up, and often behind the
              wheel and unable to take your call, you can feel like you’re
              getting passed around and around. We’re glad to say that this is a
              thing of the past, and you can now find your perfect instructor
              with the click of a button:
            </p>
            <TextCard
              span="Instant Access"
              para="to available instructors in your local area"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />
            <TextCard
              span="Secure Payments"
              para="made online so you never have to worry about withdrawing cash"
              sign={require("./assets/sign.png")}
            />
            <TextCard
              span="Multiple Bookings:"
              para="perfect for when your test is getting closer"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />

            <TextCard
              span="Speak Directly"
              para="to your instructor when their current lesson has finished"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />
            <TextCard
              span="Proven Star Rating System"
              para="allows you to find the very best of the best"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />
            <TextCard
              span="Pass Faster"
              para="than with any other driving platform"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />
            <TextCard
              span="Search Offers"
              para="such as bulk discounts and introductory sessions to find the deal for you"
              sign={require("./assets/sign.png")}
              imgHeight="16px"
            />
            <p>
              With everything you need available in an instant in the palm of
              your hand, you’ll have more time and energy than ever before to
              give every lesson your best and pass first time!{" "}
            </p>
            <div className="button">
              <Link to="/">Pass Faster, Pass First Time</Link>
            </div>
          </Fade>
        </Col>
        <Col md={6} className="hld__image__sec">
          <img
            alt="hldGirl"
            src={require("./assets/girl.png")}
            className="img-fluid"
          />
          <div className="girl__bottom">
            <p>Know your instructor before taking a lesson ! </p>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default HLD;
