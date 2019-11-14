import { BookingTypes } from "../constants";
import uuid from "uuid/v4";

export const addNewBooking = bookingData => ({
  type: BookingTypes.ADD_BOOKING,
  payload: { ...bookingData, _id: uuid() }
});

export const removeBookingItem = _id => ({
  type: BookingTypes.REMOVE_BOOKING,
  payload: _id
});
