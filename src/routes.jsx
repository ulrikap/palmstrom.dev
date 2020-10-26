import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Frontpage from "./pages/Frontpage";
import Portfolio from "./components/Portfolio";

const Routes = () => {
  const location = useLocation();

  return (
    <Route
      render={() => (
        <Switch location={location}>
          <Route
            path="/uxdesign"
            component={() => <Portfolio title="UX design" color={"#fe5f55"} />}
          />
          <Route
            path="/developer"
            component={() => <Portfolio title="Developer" color={"#777da7"} />}
          />
          <Route
            path="/infosec"
            component={() => (
              <Portfolio title="Information Security" color={"#94c9a9"} />
            )}
          />
          <Route component={() => <Frontpage />} />
        </Switch>
      )}
    />
  );
};

export default Routes;
