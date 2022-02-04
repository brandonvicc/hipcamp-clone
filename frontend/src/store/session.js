import { csrfFetch } from "./csrf";

const ADD_SESSION_USER = "session/ADD_SESSION_USER";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({
  type: ADD_SESSION_USER,
  user,
});

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login =
  ({ credential, password }) =>
  async (dispatch, getState) => {
    const response = await csrfFetch("/api/session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential, password }),
    });

    if (response.ok) {
      const sessionUser = await response.json();
      dispatch(setUser(sessionUser.user));
      return sessionUser;
    }
  };

export const restoreUser = () => async (dispatch, getState) => {
  const response = await fetch("/api/session");

  if (response.ok) {
    const user = await response.json();

    dispatch(setUser(user.user));
    return response;
  }
};

export const signupUser = (payload) => async (dispatch, getState) => {
  const response = await csrfFetch("/api/users/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data.user));
  }
  return response;
};

export const logout = () => async (dispatch, getState) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(removeUser());
    return user;
  }
};

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_SESSION_USER:
      if (action.user === undefined) return { ...state };
      newState = { user: { ...action.user } };
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
