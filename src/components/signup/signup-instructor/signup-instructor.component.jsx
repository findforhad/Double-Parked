import React from "react";
import Shake from "react-reveal/Pulse";
import { Row, Col } from "react-bootstrap";
import { isEmpty, isMobilePhone, isEmail, isLength, contains } from "validator";

import SignIn from "../../signin/signin.component";

import "./signup-instructor.styles.scss";

class SignupInstructor extends React.Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    phone: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      repassword,
      phone,
      errors
    } = this.state;

    if (isEmpty(username)) {
      errors.username = true;
    }
    if (isEmpty(firstname)) {
      errors.firstname = true;
    }
    if (isEmpty(lastname)) {
      errors.lastname = true;
    }
    if (!isEmail(email)) {
      errors.email = true;
    }
    if (!isMobilePhone(phone)) {
      errors.phone = true;
    }
    if (!isLength(password, { min: 6, max: 20 })) {
      errors.password = true;
    }
    if (!isLength(repassword, { min: 6, max: 20 })) {
      errors.repassword = true;
    }
    if (!contains(password, repassword)) {
      errors.repassword = true;
    }

    this.setState({ errors });

    console.log(this.state);
  };

  render() {
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      repassword,
      phone,
      errors
    } = this.state;
    return (
      <div className="signup__instructor__wrapper">
        <Row>
          <Col md={8}>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <div className="input-item">
                    <strong>
                      Username <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="text"
                      value={username}
                      onChange={this.handleChange}
                      name="username"
                      placeholder="Username..."
                      className={errors.username ? "error__true" : ""}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="input-item">
                    <strong>
                      Last Name <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="text"
                      value={lastname}
                      onChange={this.handleChange}
                      name="lastname"
                      placeholder="Last name..."
                      className={errors.lastname ? "error__true" : ""}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="input-item">
                    <strong>
                      First Name <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="text"
                      value={firstname}
                      onChange={this.handleChange}
                      name="firstname"
                      placeholder="First name..."
                      className={errors.firstname ? "error__true" : ""}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="input-item">
                    <strong>
                      Email <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Email..."
                      className={errors.email ? "error__true" : ""}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="input-item">
                    <strong>
                      Password <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="password"
                      value={password}
                      onChange={this.handleChange}
                      name="password"
                      placeholder="Password..."
                      className={errors.password ? "error__true" : ""}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="input-item">
                    <strong>
                      Retype Password <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="password"
                      value={repassword}
                      onChange={this.handleChange}
                      name="repassword"
                      placeholder="Confirm password..."
                      className={errors.repassword ? "error__true" : ""}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="input-item">
                    <strong>
                      Phone <span>*</span>
                    </strong>
                    <br />
                    <input
                      type="phone"
                      value={phone}
                      onChange={this.handleChange}
                      name="phone"
                      placeholder="Email..."
                      className={errors.phone ? "error__true" : ""}
                    />
                  </div>
                </Col>
              </Row>
              <label className="term_acc">
                <input type="checkbox" /> I have read and agreed to the Tems and
                Conditions
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </Col>
          <Col md={4}>
            <Shake>
              <SignIn />
            </Shake>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SignupInstructor;
