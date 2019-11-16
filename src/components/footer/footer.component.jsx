import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer__wrapper">
    <Container>
      <Row>
        <Col md={3}>
          <img
            alt="Logo"
            src={require("./logo.svg")}
            width="200px"
            className="img-fluid"
          />
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
              <strong>Your Doubleparked</strong>
            </li>
            <li>
              <Link to="/aboutus">Driving instructor</Link>
            </li>
            <li>
              <Link to="/contactus">Leaner</Link>
            </li>
            <li>
              <Link to="/careers">List your busines</Link>
            </li>
            <li>
              <Link to="/referrals">Referrals</Link>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <ul>
            <li>
              <strong>Terms and condition</strong>
            </li>
            <li>
              <Link to="/terms">Terms or use</Link>
            </li>
            <li>
              <Link to="/contactus">Policies</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/careers">FAQ</Link>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <img alt="Award" src={require("./award.png")} />
        </Col>
      </Row>
      <hr />
      <div className="copyright__wrapper">
        <Row>
          <Col md={8}>
            <small>
              © 2018 Pronto etech Services is trading as Doubleparked, All
              Rights are Reserved
            </small>
          </Col>
          <Col md={4}>
            <img
              alt="Payment Methods"
              src={require("./methods.png")}
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Footer;
