import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isEmail, isLength } from "validator";

import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, errors } = this.state;

    if (!isEmail(email)) {
      errors.email = true;
    }

    if (!isLength(password, { min: 6, max: 20 })) {
      errors.password = true;
    }
    this.setState({ errors });

    if (Object.entries(errors).length > 0) {
      console.log("Form Submisson Postponed");
    } else {
      console.log("Form Submisson Success");
    }
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="main_signin_wrapper">
        <div className="signin_wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="loginlogo">
              <img alt="loginImage" src={require("./assets/loginlogo.png")} />
            </div>

            <div className="input-item">
              <strong>Email</strong>
              <br />
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                name="email"
                placeholder="Enter email..."
                className={errors.email ? "error__true" : ""}
              />
            </div>

            <div className="input-item">
              <strong>Password</strong>
              <br />
              <input
                type="password"
                value={password}
                onChange={this.handleChange}
                name="password"
                placeholder="Enter password..."
                className={errors.password ? "error__true" : ""}
              />
            </div>
            <div className="submit__btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <hr />
        <div className="signup__extra__wrapper">
          <Row>
            <Col>
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </Col>
            <Col>
              <Link to="/forgetpassword" className="forget__password">
                Forgot Password
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignIn;
