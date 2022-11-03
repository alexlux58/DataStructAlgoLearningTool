import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home/Home";
import Quicksort from "./components/Quicksort/Quicksort";
import Mergesort from "./components/Mergesort/Mergesort";
import Bubblesort from "./components/Bubblesort/Bubblesort";

const App = () => {
  return (
    <>
      {/* The sidebar  */}
      <div className="sidebar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quicksort" element={<Quicksort />} />
        <Route path="/mergesort" element={<Mergesort />} />
        <Route path="/bubblesort" element={<Bubblesort />} />
      </Routes>
    </>
  );
};

export default App;
