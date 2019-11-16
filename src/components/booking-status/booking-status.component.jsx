import React from "react";
import { connect } from "react-redux";
import { removeBookingItem } from "../../redux/actions/booking.action";
import "./booking-status.styles.scss";

const BookingStatus = ({
  selectedBooking,
  removeBooking,
  totalBookingPrice,
  serviceFee,
  totalCost
}) => {
  return (
    <div className="booking__status">
      <div className="hint__text">
        <h5>Manual Transmission Vehicle</h5>
      </div>
      <hr />
      {selectedBooking.length > 0 ? (
        <div>
          <div className="lessons_cart">
            {selectedBooking.map(lesson => (
              <div className="lesson_booked" key={lesson._id}>
                <div className="lesson__info_text">
                  <div>
                    <p>Driving lesson ({lesson.totalTime})</p>
                  </div>
                  <div className="right">
                    <p>£{lesson.price}</p>
                    <img
                      src={require("./assets/delete.png")}
                      alt="X"
                      onClick={() => removeBooking(lesson._id)}
                    />
                  </div>
                </div>
                <div className="lesson__critaria__text">
                  <p>{lesson.scheduleTime}</p>
                  <p>Date: {`${lesson.day} ${lesson.month} ${lesson.year}`}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="booking__confirm__area">
            <h6>{selectedBooking.length} item selected for booking</h6>
            <div className="service_fee">
              <p>Service Fees(10%, capped at £2.00): </p>
              <h6>£{serviceFee}</h6>
            </div>
          </div>
          <div className="booking__btn__area">
            <h6>Total Cost: </h6>
            <h6>£{totalBookingPrice + totalCost}</h6>
          </div>
          <button>Book Now</button>
        </div>
      ) : (
        <div className="alert-red">
          <h6>You havn't booked any lesson</h6>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBooking: state.booking.selectedBooking,
  totalBookingPrice: state.booking.totalBookingPrice,
  serviceFee: state.booking.serviceFee,
  totalCost: state.booking.totalCost
});

const mapDispatchToProps = dispatch => ({
  removeBooking: _id => dispatch(removeBookingItem(_id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingStatus);
