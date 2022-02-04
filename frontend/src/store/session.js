import { csrfFetch } from "./csrf";

const ADD_SESSION_USER = "session/ADD_SESSION_USER";

const setUser = (user) => ({
  type: ADD_SESSION_USER,
  user,
});

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

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_SESSION_USER:
      newState = { user: { ...action.user } };
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
