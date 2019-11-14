import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import TextCard from "../../../../components/HLD/text-card/text-card.component";
import "./block-one.styles.scss";

const BlockOne = () => (
  <div className="blockone__wrapper">
    <Container>
      <Row>
        <Col md={7}>
          <div className="helping__driving__instructors">
            <h5>Helping Learner Drivers</h5>
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
              para="to your own personal calendar — leave the diary at home!"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Connect"
              para="with learners and notify them of your upcoming time off and holidays "
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Reduce Cancellations"
              para="by sending a friendly reminder about upcoming lessons "
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="No More Last Minute Cancellations:"
              para="all lessons paid for in advance online (72 hrs notice) "
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Success Stories"
              para="that you can share for every new student to see"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Flexible Offers"
              para="that allow you to market your business and standout from the competition"
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <TextCard
              span="Intuitive Software"
              para="that makes your day easier than ever before "
              sign={require("../../assets/sign.png")}
              imgHeight="25px"
              styles={{ position: "relative", top: "-4px" }}
            />
            <Link to="pass-faster">Pass Faster, Pass First Time</Link>
          </div>
        </Col>
        <Col md={5}>
          <img
            src={require("../../assets/helping_learner.png")}
            alt="Double Parked"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default BlockOne;
