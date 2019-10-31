import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navigation from "../../components/navigation/navigation.component";

import SignupInstructor from "../../components/signup/signup-instructor/signup-instructor.component";
import SignupLearner from "../../components/signup/signup-learner/signup-learner.component";

import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultTab: true
    };
  }
  render() {
    const { defaultTab } = this.state;
    return (
      <div className="signup__wrapper">
        <div className="signup__header__wrapper">
          <Container>
            <Navigation />
          </Container>
          <hr />
          <Container>
            <h2>Sign Up Page</h2>
          </Container>
        </div>
        <div className="layout__wrapper">
          <Container>
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link
                  onClick={() => this.setState({ defaultTab: true })}
                  className={defaultTab ? "active" : ""}
                >
                  Register as Instructor
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => this.setState({ defaultTab: false })}
                  className={defaultTab ? "" : "active"}
                >
                  Register as learner
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {defaultTab ? <SignupInstructor /> : <SignupLearner />}
          </Container>
        </div>
      </div>
    );
  }
}

export default SignUp;
