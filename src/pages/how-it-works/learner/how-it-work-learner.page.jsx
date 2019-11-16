import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

import Header from "../../../components/header/header.component";
import TextCard from "../../../components/HLD/text-card/text-card.component";

import "./how-it-work-learner.styles.scss";

const HowItWorkLearner = () => (
  <React.Fragment>
    <Header />
    <div className="how__it__works__learner__wrapper">
      <Container className="search__container">
        <div className="top__text">
          <h4>For Learners </h4>
          <h5>Get to Know Our Booking Services </h5>
          <p>
            We want to keep things super simple here and the team at
            ‘Doubleparked’ seem to have cracked it. We understand that you’re
            not only learning how to drive in your busy life.{" "}
          </p>
        </div>
        <Row>
          <Col md={4}>
            <Fade>
              <img
                alt="phone1"
                src={require("./assets/phone1.png")}
                className="img-fluid"
              />
            </Fade>
          </Col>
          <Col md={5}>
            <Fade>
              <div className="text__shape__wrapper">
                <div className="top__layer">
                  <div>
                    <h2>01</h2>
                  </div>
                  <div>
                    <h5>Search</h5>
                    <p>Enter post code and find local instructor to you.</p>
                  </div>
                </div>
                <div className="shape__layer">
                  <p>Recommended</p>
                  <p className="another__font">
                    Choose an instructor closer to you
                  </p>
                  <p className="small">
                    Our clever search function lets you find instructors as
                    close to your search area.
                  </p>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>

      <div className="chose__instructor">
        <div className="ins__wrapper"></div>
        <Container>
          <Row>
            <Col md={{ offset: 3, span: 5 }}>
              <Fade>
                <div className="text__shape__wrapper">
                  <div className="top__layer">
                    <div>
                      <h2>02</h2>
                    </div>
                    <div className="instructor__text">
                      <h5>Choose instructor</h5>
                      <p>
                        Whether your looking for a male/female instructor or
                        learn to drive in a manual or automatic each instructors
                        profile provides a brief description of their school.
                      </p>
                    </div>
                  </div>
                  <div className="shape__layer">
                    <p className="small">Hint</p>
                    <p className="another__font">
                      Find an instructor that best suits you, You’ll be able to
                      see what make vehicle they drive.
                    </p>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade>
                <img
                  alt="phone1"
                  src={require("./assets/phone2.png")}
                  className="img-fluid"
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="search__container">
        <Container>
          <Row>
            <Col md={4}>
              <Fade>
                <img
                  alt="phone1"
                  src={require("./assets/phone3.png")}
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col md={5}>
              <Fade>
                <div className="text__shape__wrapper">
                  <div className="top__layer">
                    <div className="pl">
                      <h2>03</h2>
                    </div>
                    <div>
                      <h5>Book & Pay online</h5>
                      <p>
                        You will be able to book directly into your instructor
                        diary and book future appointments without having to
                        wait for a response on an available slot.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="shape__layer">
                    <p>Recommended</p>
                    <p className="small">
                      We recommend you contact the instructor and let them know
                      your current learning status.
                    </p>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="botton__section">
        <Container>
          <Row>
            <Col md={8}>
              <div className="text__cards">
                <h5>Get to Know Our Booking Services </h5>
                <p>
                  We want to keep things super simple here and the team at
                  ‘Doubleparked’ seem to have cracked it. We understand that
                  you’re not only learning how to drive in your busy life.{" "}
                </p>
                <TextCard
                  para="Instant notifications and 24hr reminders when you book a lesson with ‘DoubleParked’ so that you’ll never forget your lesson."
                  sign={require("../assets/steps/step1.png")}
                  imgHeight="45px"
                  pad="5px 0"
                />
                <TextCard
                  para="2 Change your availability and lesson times on any given day with the click of a button."
                  sign={require("../assets/steps/step2.png")}
                  imgHeight="45px"
                  pad="5px 0"
                />
                <TextCard
                  para="Get offers and discounts from instructor with block booking."
                  sign={require("../assets/steps/step3.png")}
                  imgHeight="45px"
                  pad="5px 0"
                />
              </div>
            </Col>
            <Col md={4}>
              <img
                alt="bottomImage"
                src={require("./assets/girl.png")}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </React.Fragment>
);

export default HowItWorkLearner;
