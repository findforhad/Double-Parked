import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SavingMoneyTable from "./table/table.component";

import "./saving-money.styles.scss";

const SavingMoney = () => (
  <div className="saving__money">
    <Container>
      <div className="entire__sec">
        <Row>
          <Col md={4}>
            <img
              alt="packeges"
              src={require("../../assets/packege.png")}
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h4>Saving Money</h4>
            <h5>Whilst Making Money</h5>
            <p className="cmb">
              We don’t just make you money, we save you money at the same time.
              That means you get the perfect combination of reduced outgoings
              and massively increased income.
            </p>
            <p className="cmb">
              By leveraging our online expertise you never have to spend a penny
              on SEO or online advertising if you don’t want to — everything is
              included in our simple and transparent pricing. Not only that, but
              you can link from our site to yours. Ideal if you want to put your
              brand in front of the eyes of as many learners as possible.
            </p>
            <div className="save__extra">
              <Row>
                <Col md={4}>
                  <img src={require("./assets/clock.png")} alt="time" />
                  <h5>Save Time</h5>
                  <p>
                    Save Time We get you more learners in less time. Ideal
                    really!
                  </p>
                </Col>
                <Col md={4}>
                  <img src={require("./assets/money.png")} alt="money" />
                  <h5>Save Money</h5>
                  <p>
                    We take care of everything with a simple monthly package
                    tailored to you.
                  </p>
                </Col>
                <Col md={4}>
                  <img src={require("./assets/effort.png")} alt="effort" />
                  <h5>Save Effort</h5>
                  <p>
                    We do the hard work of finding new learners, and all you
                    have to do is keep your eye on the road!
                  </p>
                </Col>
              </Row>
              <SavingMoneyTable />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default SavingMoney;
