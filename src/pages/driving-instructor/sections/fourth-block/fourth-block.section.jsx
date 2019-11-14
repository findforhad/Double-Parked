import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./fouth-block.styles.scss";

const FourthBlock = () => (
  <div className="fouth__block">
    <Container className="fouth__block__container">
      <Row>
        <Col md={4}>
          <img
            alt="Opportunity Awaits"
            src={require("../../assets/oa.png")}
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <h4>Opportunity Awaits</h4>
          <h5>DoubleParked Shows You How</h5>
          <p>
            When you want to be able to work in a way that fits in with the rest
            of your life, we make it happen.
            <br /> Here’s just a few of the benefits of teaming up with us:
          </p>
          <ul>
            <li>
              <label>
                <div className="blue_dot"></div>
                We bring the customers to you so you never have to search for
                new learners
              </label>
            </li>
            <li>
              <label>
                <div className="blue_dot"></div>
                <span>
                  No more missing out on hard earned money due to last minute
                  cancellations. DoubleParked puts an end to not getting paid
                  for cancelled lessons with prepaid bookings and only allowing
                  refunds when cancelled 48 hours prior to a lesson
                </span>
              </label>
            </li>
            <li>
              <label>
                <div className="blue_dot"></div>
                Save money on advertising, websites, and social media campaigns
                that never deliver
              </label>
            </li>
            <li>
              <label>
                <div className="blue_dot"></div>
                Work with a team of driving instructors who know the industry
                inside out
              </label>
            </li>
            <li>
              <label>
                <div className="blue_dot"></div>
                <span>
                  Leave your notebook at home. Login to DoubleParked each
                  morning and we’ll tell you where to go
                </span>
              </label>
            </li>
          </ul>
          <p>
            No matter how many hours you want to work, or where you’re based, at
            DoubleParked we know exactly how to send more learners your way. All
            you need to do is keep your eyes on the road. What could be easier
            than that?
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FourthBlock;
