import React from "react";
import { Container, Row } from "react-bootstrap";

import Hero from "../../components/hero/hero.component";
import Card from "../../components/card/card.component";
import AppIntro from "../../components/appintro/appintro.component";

import "./home.styles.scss";

import PostCode from "./assets/post-code.svg";
import BookLesson from "./assets/book-lesson.svg";
import SearchInstructor from "./assets/search-instructor.svg";

const Home = () => (
  <React.Fragment>
    <Hero />
    <Container>
      <Row>
        <Card
          image={PostCode}
          title="Enter Post Code"
          desc="Pop in your postcode, and we’ll instantly find a list of experienced professional instructors in your local area."
        />
        <Card
          image={SearchInstructor}
          title="Search Instructor"
          desc="Find the perfect instructor for your confidence and experience level, and check their availability instantly."
        />
        <Card
          image={BookLesson}
          title="Book Lesson"
          desc="Add your lesson to an online diary so that you can easily track when your next session behind the wheel will be."
        />
      </Row>
    </Container>
    <AppIntro />
  </React.Fragment>
);

export default Home;
