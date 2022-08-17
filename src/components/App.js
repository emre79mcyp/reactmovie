import React from "react";
import "./App.css";
import SearchMovie from "./SearchMovie";

const App = () => {
  return (
    <div className="container">
      <h1 className="title" id="startShow">
        Movie Search
      </h1>
      <SearchMovie />
    </div>
  );
};

export default App;
