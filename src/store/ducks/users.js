import produce from "immer";

export const Types = {
  FETCH_USER: "users/FETCH_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const usersReducer = produce((state, action) => {
  switch (action.type) {
    case "users/FETCH_USER":
      state.currentUser = action.payload;
      break;
    default:
  }
}, INITIAL_STATE);

export const Creators = {
  fetchUser: (user) => ({
    type: Types.FETCH_USER,
    payload: { user },
  }),
};
