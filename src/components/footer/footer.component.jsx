import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer__wrapper">
    <Container>
      <Row>
        <Col md={3}>
          <img alt="Logo" src={require("./logo.svg")} width="200px" />
        </Col>
        <Col md={2}>
          <ul>
            <li>
              <strong>General</strong>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <ul>
            <li>
              <strong>General</strong>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <ul>
            <li>
              <strong>General</strong>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <img alt="Award" src={require("./award.png")} />
        </Col>
      </Row>
      <hr />
      <div className="copyright__wrapper">
        <p>
          © 2018 Pronto etech Services is trading as Doubleparked, All Rights
          are Reserved
        </p>

        <img alt="Payment Methods" src={require("./methods.png")} />
      </div>
    </Container>
  </div>
);

export default Footer;
