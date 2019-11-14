import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../../../components/header/header.component";

import "./checkout.styles.scss";

class Checkout extends React.Component {
  state = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postCode: "",
    errors: {}
  };

  handleChnage = e => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      address,
      postCode,
      errors
    } = this.state;
    return (
      <div className="chekout">
        <Header pageTitle="Checkout" />
        <Container>
          <div className="checkout__wrapper">
            <h4>Your details</h4>
            <Row>
              <Col md={8}>
                <hr />
                <div className="input-item">
                  <strong>
                    Full name<span>*</span>
                  </strong>
                  <br />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name..."
                    value={fullName}
                    onChange={this.handleChnage}
                    className={errors.fullName ? "error__true" : ""}
                  />
                </div>
                <Row>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Email</strong>
                      <br />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        value={email}
                        onChange={this.handleChnage}
                        className={errors.email ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Phone number</strong>
                      <br />

                      <input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone number..."
                        value={phoneNumber}
                        onChange={this.handleChnage}
                        className={errors.phoneNumber ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Address</strong>
                      <br />
                      <input
                        type="text"
                        name="address"
                        placeholder="Address..."
                        value={address}
                        onChange={this.handleChnage}
                        className={errors.address ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Postcode</strong>
                      <br />
                      <input
                        type="text"
                        name="postCode"
                        placeholder="Postcode..."
                        onChange={this.handleChnage}
                        value={postCode}
                        className={errors.postCode ? "error__true" : ""}
                      />
                    </div>
                  </Col>
                </Row>
                <h4 className="mt-4">Payment</h4>
                <hr />
                <Row>
                  <Col md={6}>
                    <div className="input-item">
                      <strong>Card details</strong>
                    </div>
                  </Col>
                  <Col md={6} style={{ textAlign: "right" }}>
                    <img
                      src={require("./assets/card.png")}
                      alt="payment"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <div className="input-item">
                      <strong>
                        Username <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="input-item">
                      <strong>
                        Username <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <div className="input-item">
                      <strong>
                        Username <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="input-item">
                      <strong>
                        Username <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>input wrapper</Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Checkout;
