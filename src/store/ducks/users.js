import produce from "immer";

export const Types = {
  FETCH_USER: "users/FETCH_USER",
  SET_USER: "users/SET_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const usersReducer = produce((state, action) => {
  switch (action.type) {
    case "users/FETCH_USER":
      state.currentUser = action.payload;
      break;
    case "users/SET_USER":
      console.log(action.payload);
      state.currentUser = action.payload;
      break;
    default:
  }
}, INITIAL_STATE);

export const Creators = {
  fetchUser: (user) => ({
    type: Types.FETCH_USER,
    payload: user,
  }),
  setUser: (user) => ({
    type: Types.SET_USER,
    payload: user,
  }),
};
