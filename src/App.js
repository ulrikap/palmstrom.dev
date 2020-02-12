import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./transition.css";
import "./App.scss";
import Frontpage from "./components/Frontpage";
import Portfolio from "./components/Portfolio";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "pm66g995",
  dataset: "production",
  useCdn: false // `false` if you want to ensure fresh data
});

const App = () => {
  const loct = useLocation();
  return (
    <div>
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={loct.key}
                classNames="transition"
                timeout={500}
              >
                <Switch location={location}>
                  <Route exact path="/" component={() => <Frontpage />} />
                  <Route
                    path="/uxdesign"
                    component={() => (
                      <Portfolio
                        title="UX design"
                        color={"#fe5f55"}
                        client={client}
                      />
                    )}
                  />
                  <Route
                    path="/developer"
                    component={() => (
                      <Portfolio
                        title="Developer"
                        color={"#777da7"}
                        client={client}
                      />
                    )}
                  />
                  <Route
                    path="/infosec"
                    component={() => (
                      <Portfolio
                        title="Information Security"
                        color={"#94c9a9"}
                        client={client}
                      />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </div>
  );
};

export default App;
