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
                <div className="payment__method">
                  <div>
                    <input type="checkbox" />
                    <label>Pay with card</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Cash payment</label>
                  </div>
                </div>
                <Row className="mb-2">
                  <Col md={4} sm={6}>
                    <h5>Card details</h5>
                  </Col>
                  <Col md={6} sm={6} style={{ textAlign: "right" }}>
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
                        Card number <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="input-item">
                      <strong>
                        Security code <span>*</span>
                      </strong>
                      <br />
                      <input type="text" name="username" placeholder="CVV" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <div className="input-item">
                      <strong>
                        Cardholder’s name <span>*</span>
                      </strong>
                      <br />
                      <input
                        type="text"
                        name="username"
                        placeholder="Cardholder’s name..."
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="input-item">
                      <strong>
                        Expiry Date <span>*</span>
                      </strong>
                      <br />
                      <input type="text" name="username" placeholder="mm/dd" />
                    </div>
                  </Col>
                </Row>
                <div className="payment__method">
                  <div>
                    <input type="checkbox" />
                    <label>By continuing you agree to our Booking Terms</label>
                  </div>
                </div>
                <button>Book Now</button>
              </Col>
              <Col md={4}>
                <div className="booking__details">
                  <div className="time__date">
                    <h4>6:05 PM</h4>
                    <div>
                      <p>1 September</p>
                      <p>Sunday</p>
                    </div>
                  </div>
                  <hr />
                  <div className="provider__info">
                    <h4>Instructor</h4>
                    <h4 style={{ color: "#3ca6f9" }}>Pronto Drive</h4>
                  </div>
                  <hr />
                  <div className="d_lesson">
                    <p>Your driving lessons</p>
                  </div>
                  <hr />
                  <div className="d_lesson_container">
                    <h4>08:30 - 09:30</h4>
                    <p>16 September, 2019</p>

                    <div className="time__n__price">
                      <p>60Min</p>
                      <p>£30.00</p>
                    </div>
                  </div>
                  <hr />
                  <div className="service__fee">
                    <p>Service Fees (10% Capped at £2.00)</p>
                    <p>£2.00</p>
                  </div>
                  <hr />
                  <div className="total__order">
                    <h5>Order total</h5>
                    <h5>£2.00</h5>
                  </div>
                  <hr />
                  <div className="clp">
                    <p>Cancellation policy A Reminder</p>
                    <p className="text_more">
                      If you need to reschedule or cancel your appointment, the
                      instructor youre visiting loves it when you give as much
                      notice as possible so they can re­fill your spot.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Checkout;
