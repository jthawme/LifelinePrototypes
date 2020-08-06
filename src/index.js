import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./pages/App/App";
import ParallaxScroll from "./pages/ParallaxScroll/ParallaxScroll";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/scroll">
          hello
          <ParallaxScroll />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
