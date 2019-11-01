import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./navigation.styles.scss";
import Logo from "./logo_invert.svg";

const Navigation = () => (
  <div className="navigation__wrapper">
    <Container style={{ paddingRight: "0", paddingLeft: "0" }}>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          &#9776;
        </label>
        <label className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Link>
        </label>
        <ul>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/driving-instructor">Driving Instructor</Link>
          </li>

          <li>
            <Link to="/signui-in" className="signin__btn">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </div>
);

export default Navigation;
