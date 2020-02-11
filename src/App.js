import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transition.css";

import "./App.css";
import Frontpage from "./components/Frontpage";
import Portfolio from "./components/Portfolio";

const App = () => {
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
    </div>
  );
};

export default App;
