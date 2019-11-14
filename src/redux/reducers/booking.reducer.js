import { BookingTypes } from "../constants";

const initialState = {
  selectedBooking: [],
  totalBookingPrice: null,
  serviceFee: null
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BookingTypes.ADD_BOOKING:
      return {
        ...state,
        selectedBooking: [...state.selectedBooking, action.payload],

        totalBookingPrice: state.selectedBooking.reduce(
          (accumalatedQuantity, bookingItem) =>
            (accumalatedQuantity += parseInt(bookingItem.price)),
          25
        ),
        serviceFee: state.selectedBooking.reduce(
          (accumalatedQuantity, bookingItem) => (accumalatedQuantity += 2),
          2
        )
      };

    case BookingTypes.REMOVE_BOOKING:
      return {
        ...state,
        selectedBooking: [
          ...state.selectedBooking.filter(item => item._id !== action.payload)
        ],
        totalBookingPrice: state.selectedBooking.reduce(
          (accumalatedQuantity, bookingItem) =>
            (accumalatedQuantity -= parseInt(bookingItem.price)),
          25
        ),
        serviceFee: state.selectedBooking.reduce(
          (accumalatedQuantity, bookingItem) => accumalatedQuantity - 2,
          2
        )
      };
    default:
      return initialState;
  }
};

export default bookingReducer;
