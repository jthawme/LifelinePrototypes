import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./pages/App/App";
import { routes } from "./pages/App/routes";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/" className="home-link">
        Home
      </Link>
      <Switch>
        {routes.map(({ to, component }) => (
          <Route key={to} path={to} component={component} />
        ))}
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
