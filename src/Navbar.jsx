import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Link to="/home" className="active">
        Home
      </Link>
      <Link to="/quicksort" className="active">
        Quicksort
      </Link>
      <Link to="/mergesort" className="active">
        mergesort
      </Link>
      <Link to="/bubblesort" className="active">
        bubblesort
      </Link>
    </>
  );
};

export default Navbar;
