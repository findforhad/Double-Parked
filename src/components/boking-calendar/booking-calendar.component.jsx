import React from "react";
import {
  getCurrentWeek,
  getNextSavenDays,
  getPreviousSavenDays
} from "../../utils/booking.time";
import "./booking-calendar.styles.scss";
import { connect } from "react-redux";
import { addNewBooking } from "../../redux/actions/booking.action";

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let date = today.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "November",
  "Dec"
];

class BookingCalendar extends React.Component {
  state = {
    selected: {
      day: Number(date),
      year: currentYear,
      month: months[currentMonth]
    },
    weekdays: [],
    dateArray: [],
    firstDayOfNewWeek: "",
    schedules: [],
    previous: null,
    nexWeek: null
  };

  componentDidMount() {
    console.log(this.props);
    const {
      weekdays,
      dateArray,
      firstDayOfNewWeek,
      schedules,
      previous
    } = getCurrentWeek(date, currentMonth, currentYear);

    this.setState({
      weekdays,
      dateArray,
      firstDayOfNewWeek,
      schedules,
      previous
    });
  }

  getNextSavenDays = () => {
    const {
      weekdays,
      dateArray,
      nextWeek,
      firstDayOfNewWeek
    } = getNextSavenDays();

    console.log(dateArray);

    this.setState({
      weekdays,
      dateArray,
      nextWeek,
      firstDayOfNewWeek,
      selected: dateArray[0]
    });
  };

  getPrevSavenDays = () => {
    const { maindata } = getPreviousSavenDays();
    console.log(maindata);
  };

  render() {
    const {
      selected,
      weekdays,
      dateArray,
      firstDayOfNewWeek,
      schedules,
      nextWeek
    } = this.state;

    const onDateSelect = date => {
      this.setState({ selected: date });
    };

    return (
      <div className="booking__calender">
        <div className="booking__selection">
          <div className="hint__text">
            <h5>Select date for your booking</h5>
          </div>
          <div className="month__weeks">
            {nextWeek ? (
              <span onClick={this.getPrevSavenDays}>&#10094;</span>
            ) : (
              <span></span>
            )}
            <p>
              {firstDayOfNewWeek}
              {nextWeek ? ", NextWeek" : null}
            </p>
            <span onClick={this.getNextSavenDays}>&#10095;</span>
          </div>
          <div className="schedule__wrapper">
            <div className="schedule__week__wrapper">
              {weekdays.map((day, idx) => (
                <span key={idx}>{day}</span>
              ))}
            </div>
            <div className="schedule__weekday__wrapper">
              {dateArray.map((date, idx) => (
                <span
                  key={idx}
                  className={selected.day === date.day ? "active" : ""}
                  onClick={() => onDateSelect(date)}
                >
                  {date.day}
                </span>
              ))}
            </div>

            <div className="container__wrapper">
              {schedules.map(({ scheduleTime, totalTime, price }) => (
                <div className="schedule__time__wrapper" key={scheduleTime}>
                  <span>{scheduleTime}</span>
                  <span>{totalTime}</span>
                  <span>{price}</span>
                  <button
                    onClick={() =>
                      this.props.addBooking({
                        scheduleTime,
                        totalTime,
                        price,
                        ...selected
                      })
                    }
                  >
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDsipatchToProps = dispatch => ({
  addBooking: bookingData => dispatch(addNewBooking(bookingData))
});

export default connect(
  null,
  mapDsipatchToProps
)(BookingCalendar);
