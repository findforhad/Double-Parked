import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";

import "./smarter-marketing.styles.scss";

const SmarterMarketing = () => (
  <div className="sm__block">
    <Container>
      <Row>
        <Col md={8}>
          <Fade>
            <h5>Smarter Marketing</h5>

            <p>
              We’ve been in the business a long time, which means we know what
              works and what doesn’t. Not only are we vastly experienced on the
              road, we also know a thing or two about the online world too.
            </p>

            <p>
              That means you get the benefits of an experienced team of driving
              instructors, AND a team of web developers and online marketers.
              Ideal if you want to be able to fill up your online calendar from
              now until Christmas with the click of a button! Here’s just a few
              of the ways we’ll help you grow your business
            </p>

            <p>
              We use the latest SEO and social media techniques to put eyes on
              your business. You can link from our site to yours, and we’ll even
              do the hard work for you. New learners can instantly see your
              pricing, availability, and book a lesson online.
            </p>

            <p>
              It’s a simple 3-step approach that enables you to take your
              business to the next level, whilst we do the hard work for you!
            </p>
          </Fade>
        </Col>
        <Col md={4}>
          <Slide right>
            <img
              alt="firstblock"
              src={require("../../assets/sm.png")}
              className="img-fluid"
            />
          </Slide>
        </Col>
      </Row>
    </Container>
    <Slide left>
      <div className="did_u__know__sm">
        <Container>
          <Row>
            <Col md={8}>
              <p>Did You Know?</p>
              <h5>Learner drivers are more likely to book online</h5>
              <p>
                When availability and instant payment services are available,
                learner drivers are more likely to book driving lessons online.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Slide>
  </div>
);

export default SmarterMarketing;
