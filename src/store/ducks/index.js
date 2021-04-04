import { combineReducers } from "redux";

import { usersReducer } from "./users";
import { postsReducer } from "./posts";

const reducers = combineReducers({ usersReducer, postsReducer });

export default reducers;
