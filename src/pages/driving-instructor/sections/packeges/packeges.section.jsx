import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./packeges.styles.scss";

const Packeges = () => (
  <div className="our__packeges">
    <Container>
      <h3>Our Packages</h3>
      <h5>Your Needs</h5>
      <p>
        We’re committed to providing you with exactly what you need, and nothing
        more. With two simple packages to choose from, we want to keep things
        simple
      </p>
      <div className="packeges">
        <Row>
          <Col md={2}>
            <div className="text-center">
              <img
                alt="approved packege"
                src={require("./assets/approved.png")}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6}>
            <h6>Approved Package</h6>
            <span>
              Ideal for freelance or franchisee driving instructors looking for
              a better way to grow their business.
            </span>
          </Col>
        </Row>
        <div className="packege__list">
          <Row>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon1.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon2.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon3.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="packeges">
        <Row>
          <Col md={2}>
            <div className="text-center">
              <img
                alt="approved packege"
                src={require("./assets/partnership.png")}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6}>
            <h6>Approved Package</h6>
            <span>
              Ideal for freelance or franchisee driving instructors looking for
              a better way to grow their business.
            </span>
          </Col>
        </Row>
        <div className="packege__list">
          <Row>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon1.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon4.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="packege__list__item">
                <div className="card_item__image">
                  <img
                    alt="packege__list__item"
                    src={require("./assets/icon5.png")}
                    className="img-fluid"
                  />
                </div>
                <div className="packege__text__section">
                  <h6>Priority listing</h6>
                  <p>Have your business ranked higher on learner’s search.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
    <div className="did_u__know">
      <Container>
        <Row>
          <Col md={8}>
            <p>Not sure which package best suits your needs?</p>
            <h5>Get in touch today.</h5>
            <p>
              Turn the page, and get in touch. It really is that simple when you
              partner with DoubleParke
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Packeges;
