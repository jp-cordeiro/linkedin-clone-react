import firebase, { db } from "../../firebase/firebase.utils";

export const getPostsFirebase = () => {
  return new Promise((resolve, reject) => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) =>
          resolve(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          ),
        reject
      );
  });
};

export const addPostFirebase = (post) => {
  console.log(post);
  return db.collection("posts").add({
    ...post,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
