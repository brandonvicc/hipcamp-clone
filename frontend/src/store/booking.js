import { csrfFetch } from "./csrf";

const ADD = "booking/ADD";
const LOAD_SPOT_BOOKINGS = "booking/LOAD_SPOT_BOOKINGS";
const REMOVE = "booking/REMOVE";

const addBooking = (booking) => ({
  type: ADD,
  booking,
});

const loadAll = (bookings) => ({
  type: LOAD_SPOT_BOOKINGS,
  bookings,
});

const remove = (spot) => ({
  type: REMOVE,
  spot,
});

export const getBookings = (spotId) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/bookings/spots/${spotId}`);

  if (response.ok) {
    const data = await response.json();
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

export const deleteBook = (book) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/bookings/${book}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(remove(book));
  }
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
    case REMOVE:
      newState = { ...state };
      delete newState[action.book];
      newState.list = newState.list.filter((book) => book.id !== action.book);
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
