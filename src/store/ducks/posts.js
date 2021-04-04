import produce from "immer";

export const Types = {
  GET_POSTS: "posts/GET_POSTS",
  LOAD_POSTS: "posts/LOAD_POSTS",
  ADD_POST: "posts/ADD_POST",
};

const INITIAL_STATE = {
  posts: [],
};

export const postsReducer = produce((state, action) => {
  switch (action.type) {
    case "posts/LOAD_POSTS":
      state.posts = action.payload;
      break;
    default:
  }
}, INITIAL_STATE);

export const Creators = {
  getPosts: () => ({
    type: Types.GET_POSTS,
  }),
  loadPosts: (posts) => {
    console.log(posts);
    return {
      type: Types.LOAD_POSTS,
      payload: posts,
    };
  },
  addPost: (post) => ({
    type: Types.ADD_POST,
    payload: post,
  }),
};
