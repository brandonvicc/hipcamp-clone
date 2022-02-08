import { csrfFetch } from "./csrf";

const LOAD_ONE = "spot/LOAD_ONE";

const addSpot = (spot) => ({
  type: LOAD_ONE,
  spot,
});

export const createSpot = (payload) => async (dispatch, getState) => {
  const response = await csrfFetch("/api/spots/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addSpot(data.spot));
  }
  return response;
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
      newState = { ...state, [action.spot.id]: { ...action.spot } };
      return newState;
    default:
      return state;
  }
};

export default spotReducer;
