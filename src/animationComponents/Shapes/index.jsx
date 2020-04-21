import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import "./index.scss";
import { useState } from "react";

const Shapes = () => {
  const [shapes, setShapes] = useState(undefined);
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];
  const numOfShapes = 15;

  useEffect(() => {
    (() => {
      let elements = [];
      for (var i = 0; i < numOfShapes; i++) {
        const num = Math.floor(Math.random() * 2);
        if (num === 1) {
          elements.push(
            <div
              className="square shape"
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              }}
              key={i}
            />
          );
        } else {
          elements.push(
            <div
              className="circle shape"
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              }}
              key={i}
            />
          );
        }
      }
      setShapes(elements);
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (shapes) {
      anime.remove(".shapes div");
      anime({
        targets: ".shapes div",
        easing: "easeOutCirc",
        translateX: function () {
          return anime.random(10, 90) + "vw";
        },
        translateY: function () {
          return anime.random(10, 90) + "vh";
        },
        scale: function () {
          return anime.random(10, 30) / 10;
        },
        rotate: function () {
          return anime.random(-360, 360);
        },
        duration: function () {
          return anime.random(1000, 3000);
        },
        delay: anime.stagger(50),
        loop: false,
        autoplay: true,
      });
    }
  }, [shapes]);

  let elems = document.getElementsByClassName("titletext");
  for (const elem of elems) {
    if (elem.innerHTML !== "and") {
      elem.addEventListener("click", () => {
        anime.remove(".shapes div");
        anime({
          targets: ".shapes div",
          easing: "easeOutExpo",
          translateX: function () {
            return anime.random(-150, 150) + "vw";
          },
          translateY: function () {
            return anime.random(-150, 150) + "vh";
          },
          duration: 5000,
        });
      });
    }
  }

  return (
    <div className="shapes-container">
      <div className="shapes">{shapes && shapes}</div>
    </div>
  );
};

export default Shapes;
