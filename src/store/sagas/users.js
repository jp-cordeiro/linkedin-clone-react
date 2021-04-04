import { put, all, takeLatest } from "redux-saga/effects";
import { getCurrentUser } from "../../services/firebase/users";
import { Creators as UsersActions } from "../ducks/users";

function* fetchUser() {
  try {
    yield put(UsersActions.fetchUser(getCurrentUser()));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest("users/FETCH_USER", fetchUser)]);
