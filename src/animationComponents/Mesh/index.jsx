import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./index.scss";

const Mesh = () => {
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];

  useEffect(() => {
    const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
    const fragment = document.createDocumentFragment();
    const numOfElems = 20;
    for (let i = 0; i < numOfElems; i++) {
      fragment.appendChild(document.createElement("div"));
    }

    staggerVisualizerEl.appendChild(fragment);

    const staggersAnimation = anime
      .timeline({
        targets: ".stagger-visualizer div",
        easing: "easeInOutSine",
        delay: anime.stagger(50),
        loop: false,
        autoplay: false
      })
      .add({
        targets: ".stagger-visualizer div",
        height: "150rem",
        padding: "0.5rem",
        duration: 500
      })
      .add({
        targets: ".stagger-visualizer div",
        height: "20rem",
        duration: 500
      });

    staggersAnimation.play();
  }, []);

  return <div className="stagger-visualizer"></div>;
};

export default Mesh;
