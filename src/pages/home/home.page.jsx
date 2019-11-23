import React from "react";
import { Container, Row } from "react-bootstrap";

import Hero from "../../components/hero/hero.component";
import Card from "../../components/card/card.component";
import AppIntro from "../../components/appintro/appintro.component";
import HLD from "../../components/HLD/hld.component";
import Promise from "../../components/promise/promise.components";
import Slider from "../../components/slider-reponsive/slider.component";

import "./home.styles.scss";

import PostCode from "./assets/post-code.svg";
import BookLesson from "./assets/book-lesson.svg";
import SearchInstructor from "./assets/search-instructor.svg";
const content = [
  {
    title: "Enter Post Code",
    description:
      "Pop in your postcode, and we’ll instantly find a list of experienced professional instructors in your local area.",
    icon: PostCode
    // button: "Read More",
    // image: "https://i.imgur.com/ZXBtVw7.jpg"
    // user: "Luan Gjokaj",
    // userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Search Instructor",
    description:
      "Find the perfect instructor for your confidence and experience level, and check their availability instantly.",
    icon: SearchInstructor
    // button: "Discover",
    // image: "https://i.imgur.com/DCdBXcq.jpg"
    // user: "Erich Behrens",
    // userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Book Lesson",
    description:
      "Add your lesson to an online diary so that you can easily track when your next session behind the wheel will be.",
    // button: "Buy now",
    // image: "https://i.imgur.com/DvmN8Hx.jpg",
    // user: "Bruno Vizovskyy",
    // userProfile: "https://i.imgur.com/4KeKvtH.png",
    icon: BookLesson
  }
];
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
    <Slider content={content} />
    <AppIntro />
    <HLD />
    <Promise />
  </React.Fragment>
);

export default Home;
