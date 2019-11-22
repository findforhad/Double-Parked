import React from "react";
import Header from "../../components/header/header.component";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

import "./about-us.styles.scss";

const AboutUs = () => (
  <React.Fragment>
    <Header pageTitle="About Us" />
    <div className="about__us__wrapper">
      <Container>
        <Fade>
          <Row>
            <Col md={6}>
              <div className="sec_img">
                <img
                  src={require("./assets/phone1.png")}
                  alt="Phone1"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="text__wrapper">
                <h3>Our Story</h3>
                <h4 className="mb-4">
                  ‘We’ve never been afraid to be different, and it starts with
                  our name. We wanted something memorable, catchy, and most
                  importantly easy to search’
                </h4>
                <span>
                  The idea of building an online platform where learner drivers
                  could search for a local instructors and book directly onto
                  their diary sounds simple enough?
                </span>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
      <div className="give__way">
        <Container>
          <Fade>
            <Row>
              <Col md={6}>
                <div className="text__wrapper">
                  <h3>Meet Sam and his wife Razia</h3>
                  <p>
                    The person behind the development and visionary behind
                    Doubleparked is Sam; a web developer and co-owner of Pronto
                    etech. Sam’s wife Razia is qualified driving instructor in
                    the Birmingham area.
                  </p>
                  <p>
                    Razia always made it known to Sam the difficulties of
                    managing learners, marketing her business and adjusting
                    lessons on demand for learners had on her. The plan was
                    always to build Razia a website – but it immediately dawned
                    that moving this process of booking needs to move the 21 st
                    century.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_img">
                  <img
                    src={require("./assets/give_way.png")}
                    alt="give_way"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
      <div className="century">
        <Container>
          <Fade>
            <Row>
              <Col md={6}>
                <div className="sec_img">
                  <img
                    src={require("./assets/girl.png")}
                    alt="Phone1"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="text__wrapper">
                  <h3>Moving into the 21 st century</h3>
                  <p>
                    We’re an online business, which means that we want people to
                    be able to find us with the click of a button; because when
                    they find us, they find you. With a unique name unlike
                    anything else in the industry, we stand out on Google the
                    moment you see us. Ideal if you want more learners headed
                    your way than ever before!
                  </p>
                  <p>
                    That said, there’s more to us than just a name! We’ve moved
                    with the times by making online payments the norm. Gone are
                    the days where people carry cash, or even a card. Nowadays
                    the next generation want to be able to pay online in
                    advance, and they want to be able to book a lesson whilst
                    watching Netflix on the couch.
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
      <div className="features">
        <Container>
          <Fade>
            <Row>
              <Col md={6}>
                <div className="text__wrapper">
                  <h3>We’ve crammed it with features!</h3>
                  <p>
                    DoubleParked is the first ever purpose built directory for
                    learners to find local driving instructors who can help them
                    pass their driving test. Learners can check each instructor
                    against their reviews, accreditations, and even the specific
                    type of vehicle they teach in. They can also book lessons
                    and pay online, and then have the peace of mind that their
                    lessons have been directly added into in instructor’s diary.
                    It all saves the learner time when they would normally have
                    to wait for a callback from a busy driving instructor who
                    can only take their call in the short gaps between lessons.
                  </p>
                  <p>
                    Our aim is to give learners peace of mind at every turn, and
                    that’s why we go to great lengths to ensure that every
                    instructor we list is fully trained, qualified, and
                    accredited. There has been a sharp rise in rogue instructors
                    in the past couple of years, and we’re proud to be at the
                    forefront of helping clean up the industry for the good of
                    everyone.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_img">
                  <img
                    src={require("./assets/boy.png")}
                    alt="give_way"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
      <div className="stand__out">
        <Container>
          <Fade>
            <Row>
              <Col md={6}>
                <div className="sec_img">
                  <img
                    src={require("./assets/girl2.png")}
                    alt="Phone1"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="text__wrapper">
                  <h3>
                    What makes DoubleParked stand out from your competitors?
                  </h3>
                  <p>
                    While our competitors make provisions for standalone
                    services such as a digital diaries, card payment readers,
                    and search directories, we’ve managed to combine all these
                    services, and more, under one roof.
                  </p>
                  <p>
                    We’re passionate about becoming the one stop shop for anyone
                    who wants to learn to drive in the UK. Not only that, but
                    because we’re constantly attracting new learners we provide
                    invaluable support and advertising for instructors. Whether
                    they are independent instructors or members of one of the
                    largest driving schools in the UK, DoubleParked is a
                    valuable tool that gets the job done.
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
      <div className="simple">
        <Container>
          <Fade>
            <Row>
              <Col md={6}>
                <div className="text__wrapper">
                  <h3>It’s just that simple!</h3>
                  <p>
                    So that’s exactly what we’ve built: a platform that allows
                    anyone to book you with the click of a button, and then it
                    takes care of all the payments so you don’t have to.
                  </p>
                  <p>
                    When we say that all you need to do is logon in the morning
                    and we’ll tell you where to go…that’s exactly what we mean!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="sec_img">
                  <img
                    src={require("./assets/car.png")}
                    alt="give_way"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
      <div className="performance mt-4">
        <Container>
          <Fade>
            <Row>
              <Col md={7}>
                <div className="sec_img">
                  <img
                    src={require("./assets/performance.png")}
                    alt="give_way"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={5}>
                <div className="text__wrapper">
                  <h4>Coming soon!</h4>
                  <h5>Learners Matrix </h5>
                  <h6>
                    A chance to record each of your lessons performance in real
                    time!
                  </h6>
                  <ul>
                    <li>
                      <label>
                        <div className="blue_dot"></div>
                        When am I going to be test ready?
                      </label>
                    </li>
                    <li>
                      <label>
                        <div className="blue_dot"></div>I think I’m ready now?
                      </label>
                    </li>
                  </ul>
                  <p>
                    A learner will always want to know when they are ready to
                    take a test. At the moment there is nothing in the market to
                    measure and record how well a learner is doing aside from
                    the odd occasional mock exam.
                  </p>
                  <p>
                    At Doubleparked we are working on developing a digital
                    marking scheme that instructors will be able to record and
                    pass these performance over to the learner. This will help
                    the learner decide what part of their driving they need to
                    work on and using some clever algorithm will give them an
                    expected time when they would be in a position to take a
                    test.
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  </React.Fragment>
);

export default AboutUs;
