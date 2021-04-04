import firebase, { auth } from "../../firebase/firebase.utils";

export const getCurrentUser = () => {
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        } else {
          reject("does not exist");
        }
      });
  });
};
