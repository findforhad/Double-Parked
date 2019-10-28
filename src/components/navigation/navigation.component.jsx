import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./logo_invert.svg";
import Button from "../button/button.component";

import "./navigation.styles.scss";

const Navigation = () => (
  <div className="navigation">
    <Navbar className="justify-content-between p-0">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-item">
        <span>
          <Link to="/how-it-works">How it works?</Link>
        </span>
        <Button to="/signin">Sign In</Button>
      </div>
    </Navbar>
  </div>
);

export default Navigation;
