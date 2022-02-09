import { csrfFetch } from "./csrf";

const LOAD_ONE = "spot/LOAD_ONE";
const LOAD_ALL = "spot/LOAD_ALL";
const ADD = "spot/ADD";
const REMOVE = "spot/REMOVE";

const remove = (spot) => ({
  type: REMOVE,
  spot,
});

const addSpot = (spot) => ({
  type: ADD,
  spot,
});

const loadAll = (list) => ({
  type: LOAD_ALL,
  list,
});

export const createSpot = (payload) => async (dispatch, getState) => {
  const response = await csrfFetch("/api/spots/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addSpot(data.spot));
    return data.spot;
  }
  return response;
};

export const loadOne = (id) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/spots/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(addSpot(data.spot));
  }
};

export const getSpots = () => async (dispatch, getState) => {
  const response = await csrfFetch("/api/spots/");
  if (response.ok) {
    const list = await response.json();
    dispatch(loadAll(list));
  }
};

export const deleteSpot = (id) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const spot = await response.json();
    dispatch(remove(spot));
  }
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD:
      newState = {};
      if (!state[action.spot.id]) {
        newState = { [action.spot.id]: { ...action.spot } };
        return newState;
      }
      return state;
    case LOAD_ONE:
      newState = { ...action.spot };
      return newState;
    case LOAD_ALL:
      newState = {};
      action.list.forEach((spot) => {
        newState[spot.id] = { ...spot };
      });
      return { ...state, ...newState, list: action.list };
    case REMOVE:
      newState = { ...state };
      delete newState[action.spot.id];
      return newState;
    default:
      return state;
  }
};

export default spotReducer;
