import React, { useEffect } from "react";
import "./App.scss";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
