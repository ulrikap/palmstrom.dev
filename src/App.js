import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transition.css";
import anime from "animejs/lib/anime.es.js";

import "./App.scss";
import Frontpage from "./components/Frontpage";
import Portfolio from "./components/Portfolio";

const App = () => {
  const colors = ["#fe5f55", "#777da7", "#94c9a9"];
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

  const loct = useLocation();
  return (
    <div className="App">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={loct.key} classNames="transition" timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={Frontpage} />
                <Route
                  path="/uxdesign"
                  component={() => (
                    <Portfolio title="UX design" color={"#fe5f55"} />
                  )}
                />
                <Route
                  path="/developer"
                  component={() => (
                    <Portfolio title="Developer" color={"#777da7"} />
                  )}
                />
                <Route
                  path="/infosec"
                  component={() => (
                    <Portfolio title="Information Security" color={"#94c9a9"} />
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <div className="shapes">{renderCircles()}</div>
    </div>
  );
};

export default App;
