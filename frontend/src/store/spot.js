import { csrfFetch } from "./csrf";

const LOAD_ONE = "spot/LOAD_ONE";
const LOAD_ALL = "spot/LOAD_ALL";
const ADD = "spot/ADD";
const REMOVE = "spot/REMOVE";
const UPDATE = "spot/UPDATE";

const update = (spot) => ({
  type: UPDATE,
  spot,
});

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

const getOnespot = (spot) => ({
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
    return data.spot;
  }
  return response;
};

export const loadOne = (id) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/spots/${id}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getOnespot(data));
  }
};

export const getSpots = () => async (dispatch, getState) => {
  const response = await csrfFetch("/api/spots/");
  if (response.ok) {
    const list = await response.json();
    dispatch(loadAll(list));
  }
};

export const deleteSpot = (spot) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/spots/${spot.id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(remove(spot));
  }
};

export const updateSpot = (payload) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/spots/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const updatedSpot = await response.json();
    dispatch(update(updatedSpot));
    return updatedSpot;
  }
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE:
      newState = {
        ...state,
        [action.spot.id]: { ...action.spot },
      };
      return newState;
    case REMOVE:
      newState = { ...state };
      delete newState[action.spot.id];
      newState.list = newState.list.filter(
        (spot) => spot.id !== action.spot.id
      );
      return newState;
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
      return { ...newState, list: action.list };
    default:
      return state;
  }
};

export default spotReducer;
