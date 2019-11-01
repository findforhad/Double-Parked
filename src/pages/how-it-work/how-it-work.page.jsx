import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Pulse from "react-reveal/Pulse";

import Header from "../../components/header/header.component";
import TextCard from "../../components/HLD/text-card/text-card.component";

import "./how-it-work.styles.scss";

const HowItWork = () => (
  <div className="how_it_work__wrapper">
    <Header pageTitle="How It Works" />
    <div className="layout__wrapper">
      <Container>
        <Row>
          <Col md={7}>
            <Pulse>
              <h4>For Instructors</h4>
              <h5>Get to Know Our Booking Services </h5>
              <p>
                To keep things simple, we’ve created an easy to use online
                booking system. It takes the strain off your diary, works in
                perfect harmony with your existing diary system, helps learners
                find you with the click of a button, and even stops you losing
                out due to those annoying last minute cancellations. Here’s how
                it works:{" "}
              </p>
            </Pulse>
            <Fade left>
              <TextCard
                para="Transfer your diary by blocking out existing bookings, and then simply add new in-person bookings from your diary with the click of a button."
                sign={require("./assets/steps/step1.png")}
                imgHeight="45px"
                pad="5px 0"
              />
              <TextCard
                para="Set your start and finish times, and decide how much time you want in between lessons."
                sign={require("./assets/steps/step2.png")}
                imgHeight="45px"
                pad="5px 0"
              />
              <TextCard
                para="We send you a notification when a learner books a lesson through us so that you’re never double booked."
                sign={require("./assets/steps/step3.png")}
                imgHeight="45px"
                pad="5px 0"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="second__layout__wrapper">
      <Container>
        <Row>
          <Col md={{ offset: 5 }}>
            <div className="step__others">
              <Fade right>
                <TextCard
                  para="You check you’re happy, and block it out in your diary so that you know exactly what’s going on ."
                  sign={require("./assets/steps/step4.png")}
                  imgHeight="45px"
                  pad="5px 0"
                />
                <TextCard
                  para="Payment is already secured, so you’ll never lose out again."
                  sign={require("./assets/steps/step5.png")}
                  imgHeight="45px"
                  pad="5px 0"
                />
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="thired__layout__wrapper">
      <Container>
        <Row>
          <Col md={7}>
            <Pulse>
              <h5>Anything else you need to know?</h5>
              <p>
                Our online booking system is the most flexible you’ll find
                anywhere on the web. Here’s a few of the great features we’ve
                added to make sure it stays that way:
              </p>
            </Pulse>

            <Fade left>
              <TextCard
                para="Instant notifications when a learner books a lesson so that you’ll never find yourself double booked."
                sign={require("./assets/steps/step1.png")}
                imgHeight="45px"
                pad="5px 0"
              />

              <TextCard
                para="Change your availability and lesson times on any given day with the click of a button so your dashboard and your diary work together in perfect harmony."
                sign={require("./assets/steps/step2.png")}
                imgHeight="45px"
                pad="5px 0"
              />
              <TextCard
                para="You decide how long you need between lessons, all it takes is a click."
                sign={require("./assets/steps/step3.png")}
                imgHeight="45px"
                pad="5px 0"
              />
              <TextCard
                para="Block bookings, holidays, and some much needed rest can easily be added to your calendar by disabling future spots."
                sign={require("./assets/steps/step1.png")}
                imgHeight="45px"
                pad="5px 0"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default HowItWork;
