import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";

import { auth } from "./firebase/firebase.utils";
import { Creators as UserActions } from "./store/ducks/users";

function App() {
  const user = useSelector((state) => state.usersReducer.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          UserActions.setUser({
            username: userAuth.displayName,
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(UserActions.setUser(null));
      }
    });
  }, []);

  return (
    <div className="app">
      {/* App Body */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
          </div>
        </>
      )}

      {/* Widgets */}
    </div>
  );
}

export default App;
