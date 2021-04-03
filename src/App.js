import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <SideBar />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
