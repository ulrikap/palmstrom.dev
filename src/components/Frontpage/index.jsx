import React from "react";
import "./index.scss";
import Header from "../Header/index";
import Pagesection from "../PageSection/";
import Contact from "../Contact/";
import anime from "animejs/lib/anime.es.js";

function Frontpage() {
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];
  let tl = anime.timeline({
    easing: "easeOutExpo"
  });

  tl.add({
    targets: ".shapes div",
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
    delay: anime.stagger(200)
  });

  return (
    <div className="Frontpage-container">
      <Header />
      <div className="Frontpage">
        <Pagesection title="UX Designer," red link="/uxdesign" />
        <Pagesection title="Developer" green link="/developer" />
        <Pagesection title="and" disabled />
        <Pagesection title="Cyber security analyst" blue link="/infosec" />
      </div>
      <Contact />
    </div>
  );
}

export default Frontpage;
