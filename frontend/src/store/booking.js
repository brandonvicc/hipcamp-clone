import { csrfFetch } from "./csrf";

const ADD = "booking/ADD";
const LOAD_SPOT_BOOKINGS = "booking/LOAD_SPOT_BOOKINGS";

const addBooking = (booking) => ({
  type: ADD,
  booking,
});

const loadAll = (bookings) => ({
  type: LOAD_SPOT_BOOKINGS,
  bookings,
});

export const getBookings = (spotId) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/bookings/spots/${spotId}`);

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(loadAll(data));
    return data;
  }
};

export const createBooking = (payload) => async (dispatch, getState) => {
  const response = await csrfFetch("/api/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addBooking(data.book));
    return data.book;
  }
  return response;
};

const initialState = {};

const bookReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_SPOT_BOOKINGS:
      newState = { list: action.bookings };
      action.bookings.forEach((book) => {
        newState[book.id] = { ...book };
      });
      return newState;
    case ADD:
      newState = { ...action.booking };
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
