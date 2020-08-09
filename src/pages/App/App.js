import React from "react";

import { routes } from "./routes";
import styles from "./App.module.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <ul>
        {routes.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
