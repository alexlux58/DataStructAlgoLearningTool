import React from "react";
import Sketch from "react-p5";

let QSAnimation = (props) => {
  let y = 0;
  let direction = "^";

  const setup = (p5, parentRef) => {
    p5.createCanvas(200, 200).parent(parentRef);
  };

  const draw = (p5) => {
    p5.background(1);
    p5.fill(255, y * 1.3, 0);
    p5.ellipse(p5.width / 2, y, 50);

    if (y > p5.height) {
      direction = "";
    }
    if (y < 0) {
      direction = "^";
    }
    if (direction === "^") y += 8;
    else y -= 4;
  };

  return (
    <>
      <h1>react-p5(TODO: Add QuicksortAnimation)</h1>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default QSAnimation;
