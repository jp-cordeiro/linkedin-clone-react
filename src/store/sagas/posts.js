import { put, all, takeLatest } from "redux-saga/effects";
import { Creators as PostsActions } from "../ducks/posts";
import { addPostFirebase, getPostsFirebase } from "../requests/posts";

function* getPosts() {
  try {
    const posts = yield getPostsFirebase();
    yield put(PostsActions.loadPosts(posts));
  } catch (error) {
    console.log(error);
  }
}

function* addPost({ payload }) {
  try {
    yield addPostFirebase(payload);
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest("posts/GET_POSTS", getPosts),
  takeLatest("posts/ADD_POST", addPost),
]);
