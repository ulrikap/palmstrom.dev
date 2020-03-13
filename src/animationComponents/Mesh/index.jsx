import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./index.scss";

const Mesh = () => {
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];
  const numOfSquares = 18;

  useEffect(() => {
    let tl = anime
      .timeline({
        targets: ".stagger-visualizer .square",
        autoplay: true,
        loop: true
      })
      .add({
        targets: ".stagger-visualizer .square",
        height: [
          { value: "5px", easing: "easeInOutQuad", duration: 100 },
          { value: "10px", easing: "easeInOutQuad", duration: 300 }
        ],
        scale: [
          { value: 0, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 2500 }
        ],
        translateY: [
          { value: "5vh", easing: "easeOutSine", duration: 300 },
          { value: "-20vh", easing: "easeOutSine", duration: 300 },
          { value: "2vh", easing: "easeOutSine", duration: 1300 },
          { value: "0vh", easing: "easeOutQuint", duration: 300 }
        ],
        delay: anime.stagger(300, { grid: [3, 6], from: "last" })
      });

    tl.play();
  }, []);

  const renderSquares = () => {
    let list = [];
    for (let i = 0; i < numOfSquares; i++) {
      const num = Math.floor(Math.random() * colors.length);
      list.push(
        <div
          className="square"
          key={i}
          style={{
            background: colors[num]
          }}
          id={num}
        />
      );
    }
    return list;
  };

  return <div className="stagger-visualizer">{renderSquares()}</div>;
};

export default Mesh;
