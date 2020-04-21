import React from "react";
import "./index.scss";

import Header from "../Header/index";
import Pagesection from "../PageSection/";
import Contact from "../Contact/";
import Shapes from "../../animationComponents/Shapes";

function Frontpage() {
  return (
    <div className={"Frontpage-container"}>
      <Header />
      <div className="Frontpage">
        <Pagesection title="UX Designer," red link="/uxdesign" />
        <Pagesection title="Developer" green link="/developer" />
        <Pagesection title="and" disabled />
        <Pagesection title="Cyber Security Researcher" blue link="/infosec" />
      </div>
      <Contact />
      <Shapes />
    </div>
  );
}

export default Frontpage;
