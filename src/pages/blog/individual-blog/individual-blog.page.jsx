import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { isEmpty, isLength } from "validator";

import Header from "../../../components/header/header.component";
import BlogCard from "../../../components/blog-card/blog-card.component";

import "./individual-blog.styles.scss";
import blogs from "../../../utils/blog.data";

class IndividualBlog extends React.Component {
  constructor() {
    super();
    this.state = {
      commentTitle: "",
      commentDesc: "",
      errors: {}
    };
  }

  handleCommentSubmit = e => {
    const { commentTitle, commentDesc, errors } = this.state;
    e.preventDefault();

    if (isEmpty(commentTitle)) errors.commentTitle = true;
    if (isEmpty(commentDesc)) errors.commentDesc = true;

    if (Object.entries(errors).length > 0) {
      this.setState({ errors });
    }

    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  render() {
    const { match } = this.props;
    const { commentTitle, commentDesc, errors } = this.state;
    return (
      <div className="individual__blog__wrapper">
        <Header pageTitle="Individual Blog Page" />
        <div className="blog__page_wrapper">
          <Container>
            <small>Blog Number {match.params.id}</small>
            <div className="article__header">
              <img
                alt="imageOne"
                src={require("./assets/img-one.png")}
                className="img-fluid"
              />
              <div className="article__title">
                <h2>How to find the right Driver's Education instructor</h2>
              </div>
            </div>
            <p className="author-sec">
              by <strong>Ben Gelblum</strong> - June 24, 2019in Automotive
            </p>

            <p className="cmb">
              Ask most people, and they’ll tell you they’re a good driver. The
              reality, though, is that there is a good chance they have habits
              behind the wheel that would land them a ticket or two.
            </p>
            <p className="cmb">
              Most people tend to develop more aggressive or lazy driving
              behaviour over time, so when you’re just starting to learn how to
              drive make sure you develop good defensive driving habits that
              will save you money in the future.
            </p>

            <p className="cmb">
              It’s common to learn to drive from a parent or another family
              member, but there’s a good argument choosing a driving school or
              instructor over Mom and Dad. Not only can the right driving school
              save you money on your insurance, it help you get your license
              faster and better prepare you for the licensing tests. Here’s what
              to look at when looking for a good Driver’s Education instructor:
            </p>

            <div className="extra_text__section">
              <h4>Go to a government-approved instructor</h4>
              <p className="cmb">
                A great place to start is looking at the schools that have
                passed the standards laid out by the same organization that’s
                granting you your licence. Government-approved schools typically
                come with the advantage of scoring you a pretty big discount on
                your car insurance, often up to 25%. This makes those lessons
                well worth the upfront cost.
              </p>
              <p className="cmb">
                In Ontario, <b>government-approved driving classes</b>
                also allow you to take the <b>G2 Road Test</b> four months
                sooner than learning on your own. Get on the road sooner with
                the help of a good Driever’s Education instructor.
              </p>
            </div>
            <img
              alt="imageTwo"
              src={require("./assets/img-two.png")}
              className="img-fluid"
            />
            <div className="extra_text__section">
              <h4>Use your personal circle</h4>
              <p className="cmb">
                Family members and friends can probably recommend instructors
                they personally feel are good at their jobs. A personal
                testimony like that holds a lot of weight. Not only can you see
                the results of the instructor’s teaching, but you might start
                off on a friendly foot having a personal connection from the
                outset.
              </p>
              <p className="cmb">
                Aside from recommendations, it’s also possible that family and
                (very trusting) friends let you practice using their cars.
                Realize, though, that people who aren’t trained instructors tend
                to get a little nervous and protective when letting amateurs
                behind the wheel. Sometimes this can lead to tension, which
                isn’t good for anyone in the relationship. You generally drive
                better when you’re relaxed.
              </p>
            </div>
            <div className="extra_text__section">
              <h4>Get to know the instructor before committing</h4>
              <p className="cmb">
                Sit down and talk with the person you’ll learn from before you
                actually commit to purchasing the service. You want to feel
                comfortable so you are more relaxed and less likely to make
                mistakes.
              </p>
              <p className="cmb">
                A good driving instructor has many of the same qualities as a
                good school teacher:
              </p>

              <ul>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Patience
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Experience
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Good communication skills
                  </label>
                </li>
              </ul>
              <p className="cmb">
                When interviewing a Driver’s Education instructor, ask practical
                questions about the lessons to help you decide if they make a
                good fit for you. Some questions are fairly obvious, such as
                making sure the instructor is available when you are, and how
                much the lessons cost. Other things you should ask are a little
                less obvious:
              </p>

              <ul>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    What will the course/lessons include? Some include use of
                    their car for the road test at the end of the training
                    period.
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Does the lesson time include pick-up and drop-off?
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    What is the cancellation/rescheduling policy? Will you pay a
                    fee, lose out on the lesson, or reschedule at no cost?
                  </label>
                </li>
                <li>
                  <label>
                    <img alt="point" src={require("./assets/dot.png")} />
                    Are they local? This is important if you need an in-class
                    course.
                  </label>
                </li>
              </ul>

              <p>
                Once you find the right Driver’s Education instructor, you can
                be well on your way to learning how to driver safer – and maybe
                even save money on your auto insurance.
              </p>
            </div>
            <div className="comment__area">
              <h3>Comments</h3>
              <hr />

              <form onSubmit={this.handleCommentSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Title</strong>
                      <br />
                      <input
                        type="text"
                        value={commentTitle}
                        onChange={this.handleChange}
                        name="commentTitle"
                        placeholder="Review Title..."
                        className={errors.commentTitle ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Description</strong>
                      <br />
                      <textarea
                        type="text"
                        cols={10}
                        value={commentDesc}
                        onChange={this.handleChange}
                        name="commentDesc"
                        placeholder="Review Text..."
                        className={errors.commentDesc ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                </Row>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="more__blogs">
              <h3>Read this next</h3>
              <hr />
              <Row>
                {blogs
                  .filter((blog, idx) => idx < 3)
                  .map(blog => (
                    <BlogCard key={blog.id} {...blog} />
                  ))}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default IndividualBlog;
