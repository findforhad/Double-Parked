import React from "react";
import { Container, Row } from "react-bootstrap";

import Hero from "../../components/hero/hero.component";
import Card from "../../components/card/card.component";
import AppIntro from "../../components/appintro/appintro.component";
import HLD from "../../components/HLD/hld.component";
import Promise from "../../components/promise/promise.components";

import "./home.styles.scss";

import PostCode from "./assets/post-code.svg";
import BookLesson from "./assets/book-lesson.svg";
import SearchInstructor from "./assets/search-instructor.svg";

const Home = () => (
  <React.Fragment>
    <Hero />
    <Container className="home__card__block">
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
    <HLD />
    <Promise />
  </React.Fragment>
);

export default Home;
// .Rounded_Rectangle_4_copy_4 {
//   border-radius: 6px;
//   background-color: rgb(255, 255, 255);
//   box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.07);
//   position: absolute;
//   left: 1324px;
//   top: 900px;
//   width: 360px;
//   height: 500px;
//   z-index: 157;
// }
