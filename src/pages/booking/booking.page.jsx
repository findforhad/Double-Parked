import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../../components/header/header.component";
import BookingCalendar from "../../components/boking-calendar/booking-calendar.component";
import BookingStatus from "../../components/booking-status/booking-status.component";

import "./booking.styles.scss";

const Booking = () => (
  <div className="booking__main__wrapper">
    <Header pageTitle="Booking your lesson" />
    <Container>
      <div className="booking__wrapper">
        <Row>
          <Col md={6}>
            <BookingCalendar />
          </Col>
          <Col md={6}>
            <BookingStatus />
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Booking;
