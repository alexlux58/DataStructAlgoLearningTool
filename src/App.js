import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      {/* The sidebar  */}
      <div class="sidebar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      {/* Page content  */}
      <div class="content">..</div>
    </>
  );
};

export default App;
