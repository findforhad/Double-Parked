import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";

import "./first-block.styles.scss";

const FirstBlock = () => (
  <div className="first__block">
    <Container>
      <Row>
        <Col md={8}>
          <Fade>
            <h4>Hello!</h4>
            <h5>
              We just wanted to stop by and tell you a little bit about a new
              approach to building a successful driving school.
            </h5>
            <p>
              As driving instructors ourselves, we grew tired of the usual
              pitfalls that the job entails. Do any of these sound familiar to
              you?
            </p>

            <ul>
              <li>
                <label>
                  <div className="blue_dot"></div>
                  <span>Struggling to attract new learners</span>
                </label>
              </li>
              <li>
                <label>
                  <div className="blue_dot"></div>
                  <span>Last minute cancellations losing you money</span>
                </label>
              </li>
              <li>
                <label>
                  <div className="blue_dot"></div>
                  <span>Website and marketing costs</span>
                </label>
              </li>
            </ul>
            <p>
              These are just the sorts of things that we grew frustrated with,
              so we did something about it. By launching an easy to use web
              platform that allows learners to search, book, and pay for lessons
              with the click of a button, we took care of everything in one go.
            </p>
            <p>
              We’ll build you a profile, pop your website on it, build one if
              you don’t have one, take care of all the payment processing, and
              generally just make your life easier.
            </p>
            <p>
              Oh and there’s one more thing, learners can now see your
              availability when they come to book their next lesson. That means
              all you have to do each morning is logon, and we’ll tell you where
              to go. We’ve even left enough time for you to get a sausage roll
              and cup of coffee in between lessons.
            </p>
          </Fade>
        </Col>
        <Col md={4}>
          <Slide right>
            <img
              alt="firstblock"
              src={require("../../assets/instructor.png")}
              className="img-fluid"
            />
          </Slide>
        </Col>
      </Row>
    </Container>
    <Slide left>
      <div className="did_u__know">
        <Container>
          <p className="">Did You Know?</p>
          <h5>
            Online payments go directly to the instructor.
            <br />
            We accept payments by PayPal or by card.
          </h5>
        </Container>
      </div>
    </Slide>
  </div>
);

export default FirstBlock;
