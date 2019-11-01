import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";

import Header from "../../components/header/header.component";
import TextCard from "../../components/HLD/text-card/text-card.component";

import "./driving-instructor.styles.scss";

const DrivingInstructor = () => (
  <div className="driving_instructor__wrapper">
    <Header pageTitle="Driving Instructor Page" />
    <div className="first__block">
      <Container>
        <Row>
          <Col md={8}>
            <Fade>
              <h4>Hello!</h4>
              <h5>
                We just wanted to stop by and tell you a little bit about a new
                approach to building a successful driving school.
              </h5>
              <p>
                As driving instructors ourselves, we grew tired of the usual
                pitfalls that the job entails. Do any of these sound familiar to
                you?
              </p>

              <ul>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Struggling to attract new learners
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Last minute cancellations losing you money
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Website and marketing costs
                  </label>
                </li>
              </ul>
              <p>
                These are just the sorts of things that we grew frustrated with,
                so we did something about it. By launching an easy to use web
                platform that allows learners to search, book, and pay for
                lessons with the click of a button, we took care of everything
                in one go.
              </p>
              <p>
                We’ll build you a profile, pop your website on it, build one if
                you don’t have one, take care of all the payment processing, and
                generally just make your life easier.
              </p>
              <p>
                Oh and there’s one more thing, learners can now see your
                availability when they come to book their next lesson. That
                means all you have to do each morning is logon, and we’ll tell
                you where to go. We’ve even left enough time for you to get a
                sausage roll and cup of coffee in between lessons.
              </p>
            </Fade>
          </Col>
          <Col md={4}>
            <Slide right>
              <img
                alt="firstblock"
                src={require("./assets/instructor.png")}
                className="img-fluid"
              />
            </Slide>
          </Col>
        </Row>
      </Container>
      <Slide left>
        <div className="did_u__know">
          <Container>
            <p className="">Did You Know?</p>
            <h5>
              Online payments go directly to the instructor.
              <br />
              We accept payments by PayPal or by card.
            </h5>
          </Container>
        </div>
      </Slide>
    </div>

    <div className="sec__block">
      <Container>
        <Row>
          <Col md={8}>
            <div className="helping__driving__instructors">
              <h5>Helping Driving Instructors</h5>
              <p>
                The life of a driving instructor can be a tough one, we know
                that. With new students constantly trying to get through on the
                phone when you have to have focus your full attention on the
                lesson at hand you can run the risk of missing out on a large
                amount of business. That’s why DoubleParked takes care of
                everything for you:
              </p>
              <TextCard
                span="Instant Access"
                para="to your own personal calendar — leave the diary at home!"
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="Connect"
                para="with learners and notify them of your upcoming time off and holidays "
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="Reduce Cancellations"
                para="by sending a friendly reminder about upcoming lessons "
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="No More Last Minute Cancellations:"
                para="all lessons paid for in advance online (72 hrs notice) "
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="Success Stories"
                para="that you can share for every new student to see"
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="Flexible Offers"
                para="that allow you to market your business and standout from the competition"
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
              <TextCard
                span="Intuitive Software"
                para="that makes your day easier than ever before "
                sign={require("./assets/sign.png")}
                imgHeight="25px"
                styles={{ position: "relative", top: "-4px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="thired__block">
      <Container>
        <Row>
          <Col md={{ offset: 6 }}>
            <Fade>
              <div className="thired_block__text">
                <p>
                  Leave the days of flicking frantically through your diary at
                  the side of the road behind, and keep everything you need
                  right here at doubleparked.co.uk. Perfect for finding anything
                  and everything in an instant!
                </p>
                <h4>The Helping Hand You Need!</h4>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default DrivingInstructor;
