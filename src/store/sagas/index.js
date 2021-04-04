import { all } from "redux-saga/effects";

import users from "./users";
import posts from "./posts";

export default function* rootSaga() {
  return yield all([users, posts]);
}
