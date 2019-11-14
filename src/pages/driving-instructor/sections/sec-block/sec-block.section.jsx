import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextCard from "../../../../components/HLD/text-card/text-card.component";

import "./sec-block.styles.scss";

const SecBlock = () => (
  <div className="sec__block">
    <Container>
      <Row>
        <Col md={8}>
          <div className="helping__driving__instructors">
            <h5>Helping Driving Instructors</h5>
            <p>
              The life of a driving instructor can be a tough one, we know that.
              With new students constantly trying to get through on the phone
              when you have to have focus your full attention on the lesson at
              hand you can run the risk of missing out on a large amount of
              business. That’s why DoubleParked takes care of everything for
              you:
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
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SecBlock;
