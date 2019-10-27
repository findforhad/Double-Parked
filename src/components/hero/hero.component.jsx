import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../navigation/navigation.component";
import Search from "../search/search.component";

import "./hero.styles.scss";

const Hero = () => (
  <div className="hero-container">
    <Container>
      <Navigation />
      <Search />
    </Container>
  </div>
);

export default Hero;
