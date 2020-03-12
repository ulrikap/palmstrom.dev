import React, { useState } from "react";
import "./index.scss";
import Header from "../Header/index";
import Pagesection from "../PageSection/";
import Contact from "../Contact/";
import Shapes from "../../animationComponents/Shapes";
import Mesh from "../../animationComponents/Mesh";

function Frontpage() {
  const [exiting, setExiting] = useState(false);

  return (
    <div className={"Frontpage-container " + (exiting ? "exiting" : "")}>
      <Header />
      <div className="Frontpage">
        <Pagesection
          title="UX Designer,"
          red
          link="/uxdesign"
          setExiting={setExiting}
        />
        <Pagesection
          title="Developer"
          green
          link="/developer"
          setExiting={setExiting}
        />
        <Pagesection title="and" disabled />
        <Pagesection
          title="Cyber security analyst"
          blue
          link="/infosec"
          setExiting={setExiting}
        />
      </div>
      <Contact />
      {Math.floor(Math.random() * 2) === 1 ? (
        <Mesh exiting={exiting} />
      ) : (
        <Shapes exiting={exiting} />
      )}
    </div>
  );
}

export default Frontpage;
