import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./index.scss";

const Shapes = () => {
  const [showShapes, setState] = useState(true);

  useEffect(() => {
    return () => {
      console.log("skakke hær enna");
      setState(false);
    };
  }, []);

  const colors = ["#fe5f55", "#777da7", "#94c9a9"];

  anime({
    targets: ".shapes div",
    easing: "easeOutExpo",
    translateX: function() {
      return anime.random(10, 90) + "vw";
    },
    translateY: function() {
      return anime.random(10, 90) + "vh";
    },
    scale: function() {
      return anime.random(10, 20) / 10;
    },
    rotate: function() {
      return anime.random(-360, 360);
    },
    duration: function() {
      return anime.random(1000, 5000);
    },
    delay: anime.stagger(100),
    loop: false,
    autoplay: true
  });
  let renderCircles = () => {
    let elements = [];
    for (var i = 0; i < 30; i++) {
      const num = Math.floor(Math.random() * 3);
      if (num === 1) {
        elements.push(
          <div
            className="triangle"
            style={{
              borderBottom:
                "solid 15px " +
                colors[Math.floor(Math.random() * colors.length)]
            }}
          />
        );
      } else if (num === 2) {
        elements.push(
          <div
            className="circle"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
          />
        );
      } else {
        elements.push(
          <div
            className="square"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
          />
        );
      }
    }
    return elements;
  };

  return (
    <>
      {showShapes ? (
        <div className="shapes-container">
          <div className="shapes">{renderCircles()}</div>
          <div className="boxes">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Shapes;
