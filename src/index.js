import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import sanityClient from "@sanity/client";
import Routes from "./routes.jsx";

import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

export const client = sanityClient({
  projectId: "pm66g995",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
