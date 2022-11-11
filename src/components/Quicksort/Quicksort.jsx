import React from "react";
import "./Quicksort.scss";
import QSAnimation from "./QuicksortAnimation/QSAnimation";

const Quicksort = () => {
  return (
    <div className="content">
      <h2>What is Quick Sort?</h2>
      <div>
        <strong>Quick Sort</strong> divides the given array into smaller parts
        based on a pivot element that can start from any index. The sort
        operations get performed on the smaller segments of the array.
      </div>
      <div className="time-completxity">
        <ul>
          <li>
            The <strong>BEST</strong> Time Completxity for
            <strong> Quick Sort</strong> is <strong>Ω(n log(n))</strong>.
          </li>
          <li>
            The <strong>AVERAGE</strong> Time Completxity for
            <strong> Quick Sort</strong> is <strong>Θ(n log(n))</strong>.
          </li>
          <li>
            The <strong>WORST</strong> Time Completxity for
            <strong> Quick Sort</strong> is <strong>O(n^2)</strong>.
          </li>
        </ul>
      </div>
      <div className="space-completxity">
        <ul>
          <li>
            The <strong>WORST</strong> Space Completxity for
            <strong> Quick Sort</strong> is <strong>O(log(n))</strong>.
          </li>
        </ul>
      </div>
      <h3>Steps for Quick Sort</h3>
      <ol>
        <li>First select an element which is to be called as pivot element.</li>
        <li>
          Next, compare all array elements with the selected pivot element and
          arrange them in such a way that, elements less than the pivot element
          are to it’s left and greater than pivot is to it’s right.
        </li>
        <li>
          Finally, perform the same operations on left and right side elements
          to the pivot element.
        </li>
      </ol>
      <br />
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

      {/* <QSAnimation /> */}
      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3San3uKKHgg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h4>JavaScript</h4>
      <code>
        function quickSort(array, left, right)
        <br />
        pivot;
        <br />
        partitionIndex;
        <br />
        if(left &#x3C; right)
        <br />
        pivot = right;
        <br />
        partitionIndex = partition(array, pivot, left, right);
        <br />
        //sort left and right <br />
        quickSort(array, left, partitionIndex - 1);
        <br />
        quickSort(array, partitionIndex + 1, right);
        <br /> return array; function partition(array, pivot, left, right) let
        pivotValue = array[pivot]; let partitionIndex = left; for(let i = left;
        i &#x3C; right; i++) if(array[i] &#x3C; pivotValue) swap(array, i,
        partitionIndex); partitionIndex++; swap(array, right, partitionIndex);
        return partitionIndex; function swap(array, firstIndex, secondIndex) var
        temp = array[firstIndex]; array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
      </code>
      <h4>Python</h4>
      <pre className="code">
        {/* 
          --- Code in Decoded HTML entity form ---

          def partition(arr, left, right):
          i = left
          j = right - 1
          pivot = arr[right]

          while i < j:
            while i < right and arr[i] < pivot:
              i += 1
            while j > left and arr[j] >= pivot:
              j -= 1
            if i < j:
              arr[i], arr[j] = arr[j], arr[i]
          if arr[i] > pivot:
            arr[i], arr[right] = arr[right], arr[i]
          return i

          # O(n^2), Omega(n logn)
          def quickSort(arr, left, right):
          if left < right:
            partition_pos = partition(arr, left, right)
            quickSort(arr, left, partition_pos - 1)
            quickSort(arr, partition_pos + 1, right) 
          */}
        {/* --- Code in Encoded HTML entity form --- */}
        def partition(arr, left, right): <br />i = left
        <br />j = right - 1 <br />
        pivot = arr[right]
        <br />
        <br />
        while i &#x3C; j:
        <br />
        while i &#x3C; right and arr[i] &#x3C; pivot:
        <br /> i += 1<br /> while j &#x3E; left and arr[j] &#x3E;= pivot:
        <br /> j -= 1<br /> if i &#x3C; j:
        <br /> arr[i], arr[j] = arr[j], arr[i]
        <br />
        if arr[i] &#x3E; pivot:
        <br /> arr[i], arr[right] = arr[right], arr[i]
        <br /> return i <br />
        <br /># O(n^2), Omega(n logn) <br />
        def quickSort(arr, left, right):
        <br /> if left &#x3C; right:
        <br /> partition_pos = partition(arr, left, right)
        <br /> quickSort(arr, left, partition_pos - 1)
        <br /> quickSort(arr, partition_pos + 1, right)
      </pre>
    </div>
  );
};

export default Quicksort;
