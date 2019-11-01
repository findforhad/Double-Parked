import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../navigation/navigation.component";

import "./header.styles.scss";

const Header = ({ pageTitle }) => (
  <div className="header__wrapper">
    <Container>
      <Navigation />
    </Container>
    <hr />
    <Container>
      <h2>{pageTitle ? pageTitle : null}</h2>
    </Container>
  </div>
);

export default Header;
