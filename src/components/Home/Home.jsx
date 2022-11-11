import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="content">
      <h2>What is Sorting?</h2>
      <p>
        a sorting algorithm is an algorithm that puts elements of a list into an
        order. The most frequently used orders are numerical order and
        lexicographical order, and either ascending or descending.
      </p>
      <h2>Default sorting in Javascript</h2>
      <p>
        JavaScript has sort(). Let us take an example with few array of elements
        like [5,3,7,6,2,9] and want to sort this array elements in ascending
        order. Just call sort() on items array and it sorts array elements in
        ascending order.
      </p>

      <img
        src="big-o-graph.png"
        width="1000"
        height="1000"
        alt="big-o-graph.png"
      />

      <img src="DSOps.jpg" width="400" height="400" alt="DSOps.jpg" />
      <img src="sortalgos.jpg" width="400" height="400" alt="sortalgos.jpg" />

      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kPRA0W1kECg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
