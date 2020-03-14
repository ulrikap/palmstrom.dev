import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import "./index.scss";

const Shapes = () => {
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];
  const numOfShapes = 20;

  useEffect(() => {
    anime.remove(".shapes div");
    anime({
      targets: ".shapes div",
      easing: "easeOutCirc",
      translateX: function() {
        return anime.random(10, 90) + "vw";
      },
      translateY: function() {
        return anime.random(10, 90) + "vh";
      },
      scale: function() {
        return anime.random(10, 30) / 10;
      },
      rotate: function() {
        return anime.random(-360, 360);
      },
      duration: function() {
        return anime.random(1000, 3000);
      },
      delay: anime.stagger(50),
      loop: false,
      autoplay: true
    });
  }, []);

  let elems = document.getElementsByClassName("titletext");
  for (const elem of elems) {
    if (elem.innerHTML !== "and") {
      elem.addEventListener("mouseover", () => {
        anime.remove(".shapes div");
        anime({
          targets: ".shapes div",
          easing: "easeOutExpo",
          translateX: function() {
            return anime.random(10, 90) + "vw";
          },
          translateY: function() {
            return anime.random(10, 90) + "vh";
          },
          rotate: function() {
            return anime.random(-360, 360);
          }
        });
      });
    }
  }

  let renderShapes = () => {
    let elements = [];
    for (var i = 0; i < numOfShapes; i++) {
      const num = Math.floor(Math.random() * 2);
      if (num === 1) {
        elements.push(
          <div
            className="square shape"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
            key={i}
          />
        );
      } else {
        elements.push(
          <div
            className="circle shape"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
            key={i}
          />
        );
      }
    }
    return elements;
  };

  return (
    <div className="shapes-container">
      <div className="shapes">{renderShapes()}</div>
    </div>
  );
};

export default Shapes;
