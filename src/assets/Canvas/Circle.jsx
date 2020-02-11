import React from "react";
import { useRef, useEffect } from "react";

const getPixelRatio = context => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const Circle = () => {
  let ref = useRef();

  useEffect(() => {
    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    useEffect(() => {
      let canvas = ref.current;
      let context = canvas.getContext("2d");
      context.beginPath();
      context.arc(50, 50, 50, 0, 2 * Math.PI);
      context.fill();
    });

    let requestId;
    i = 0;
    const render = () => {
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        (canvas.width / 2) * Math.abs(Math.cos(i)),
        0,
        2 * Math.PI
      );
      context.fill();
      i += 0.05;
      requestId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(requestId);
    };
  });
  return <canvas ref={ref} style={{ width: "1000px", height: "100px" }} />;
};

export default Circle;
