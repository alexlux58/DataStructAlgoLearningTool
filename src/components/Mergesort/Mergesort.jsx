import React from "react";
import SortingVisualizer from "../SortingVisualizer/SortingVisualizer";
import "./Mergesort.scss";

const Mergesort = () => {
  return (
    <div className="content">
      <h2>What is Merge Sort?</h2>
      <div>
        <strong>Merge Sort</strong> is a sorting algorithm that is based on the
        Divide and Conquer paradigm. In this algorithm, the array is initially
        divided into two equal halves and then they are combined in a sorted
        manner.
      </div>
      <div className="time-completxity">
        <ul>
          <li>
            The <strong>BEST</strong> Time Completxity for
            <strong> Merge Sort</strong> is <strong>Ω(n log(n))</strong>.
          </li>
          <li>
            The <strong>AVERAGE</strong> Time Completxity for
            <strong> Merge Sort</strong> is <strong>Θ(n log(n))</strong>.
          </li>
          <li>
            The <strong>WORST</strong> Time Completxity for
            <strong> Merge Sort</strong> is <strong>Ω(n log(n))</strong>.
          </li>
        </ul>
      </div>
      <div className="space-completxity">
        <ul>
          <li>
            The <strong>WORST</strong> Space Completxity for
            <strong> Merge Sort</strong> is <strong>O(n)</strong>.
          </li>
        </ul>
      </div>
      <h3>Steps for Merge Sort</h3>
      <ol>
        <li>Declare array and left, right, mid variable</li>
        <li>perform merge function</li>
        if left &gt; right return;&#13; mid= (left+right)/2; mergesort(array,
        left, mid); mergesort(array, mid+1, right); merge(array, left, mid,
        right);
      </ol>
      <br />
      <SortingVisualizer />
    </div>
  );
};

export default Mergesort;
