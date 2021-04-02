import { put, all, takeLatest } from "redux-saga/effects";
import firebase, { auth } from "../../firebase/firebase.utils";
import { Creators as UsersActions } from "../ducks/users";

function* fetchUser() {
  try {
    firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          put(UsersActions.fetchUser(snapshot.data()));
        } else {
          console.log("does not exist");
        }
      });
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest("users/FETCH_USER", fetchUser)]);
