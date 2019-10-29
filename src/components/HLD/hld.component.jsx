import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import TextCard from "./text-card/text-card.component";
import Button from "../button/button.component";

import "./hld.styles.scss";

const HLD = () => (
  <Container className="hld__wrapper">
    <Row>
      <Col md={6}>
        <Fade>
          <h4>Helping Learner Drivers</h4>
          <div className="line"></div>
          <p>
            Finding an instructor can be a tricky business. With the best in the
            business seemingly forever booked up, and often behind the wheel and
            unable to take your call, you can feel like you’re getting passed
            around and around. We’re glad to say that this is a thing of the
            past, and you can now find your perfect instructor with the click of
            a button:
          </p>
          <TextCard
            span="Instant Access"
            para="to available instructors in your local area"
          />
          <TextCard
            span="Secure Payments"
            para="made online so you never have to worry about withdrawing cash"
          />
          <TextCard
            span="Multiple Bookings:"
            para="perfect for when your test is getting closer"
          />

          <TextCard
            span="Speak Directly"
            para="to your instructor when their current lesson has finished"
          />
          <TextCard
            span="Proven Star Rating System"
            para="allows you to find the very best of the best"
          />
          <TextCard
            span="Pass Faster"
            para="than with any other driving platform"
          />
          <TextCard
            span="Search Offers"
            para="such as bulk discounts and introductory sessions to find the deal for you"
          />
          <p>
            With everything you need available in an instant in the palm of your
            hand, you’ll have more time and energy than ever before to give
            every lesson your best and pass first time!{" "}
          </p>
          <Button to="/" bg="#80d047">
            Pass Faster, Pass First Time
          </Button>
        </Fade>
      </Col>
      <Col md={6}>
        <Fade right>
          <img alt="hldGirl" src={require("./assets/girl.png")} />
          <div className="girl__bottom">
            <p>Know your instructor before taking a lesson ! </p>
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default HLD;
