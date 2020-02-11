import React from "react";
import "./index.scss";
import Header from "../Header/index";
import Pagesection from "../PageSection/";
import Contact from "../Contact/";
import anime from "animejs/lib/anime.es.js";

function Frontpage() {
  let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750
  });

  tl.add({
    targets: ".shapes div",
    width: "100%",
    backgroundColor: "rgb(197, 197, 255)",
    delay: anime.stagger(100)
  });

  tl.add({
    targets: ".shapes div",
    width: "90%",
    backgroundColor: "rgb(235, 235, 255)"
  });

  let rotate = () =>
    anime({
      targets: ".shapes",
      scaleY: "2",
      scaleX: "2",
      translateX: "40%",
      rotate: "45deg",
      duration: 5000,
      autoplay: true
    });
  setTimeout(() => {
    rotate();
  }, 2000);

  let slide = percent => {
    anime({
      targets: ".shapes",
      translateX: percent,
      //Use 20%-40%
      duration: 3000
    });
  };

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
      <div className="shapes">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Frontpage;
