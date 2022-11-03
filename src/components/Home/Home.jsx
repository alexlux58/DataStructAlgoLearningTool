import React from "react";

const Home = () => {
  return (
    <div className="content">
      <h2>What is Sorting?</h2>
      <p>
        Sorting is nothing but, arranging elements in the order we want. You
        might have come across this in your school or college days. Like
        arranging numbers from smaller to greater (ascending) or from greater to
        smaller (descending) is what we saw till now and is called sorting.
      </p>
      <h2>Default sorting in Javascript</h2>
      <p>
        JavaScript has sort(). Let us take an example with few array of elements
        like [5,3,7,6,2,9] and want to sort this array elements in ascending
        order. Just call sort() on items array and it sorts array elements in
        ascending order.
      </p>
      <h3>
        What is the reason to choose Quick sort over default sort() in
        JavaScript
      </h3>
      <p>
        Though sort() gives the result we want, problem lies with the way it
        sorts the array elements. Default sort() in JavaScript uses insertion
        sort by V8 Engine of Chrome and Merge sort by Mozilla Firefox and
        Safari. But, other this is not suitable if you need to sort large number
        of elements. So, the solution is to use Quick sort for large dataset.
        So, to understand completely, you need to know how Quick sort works and
        let us see that in detail now.
      </p>
    </div>
  );
};

export default Home;
