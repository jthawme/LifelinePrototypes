import React from "react";

import styles from "./GradientPage.module.scss";

const GradientPage = ({ top, right, bottom, left, x, y, z, background }) => {
  const colors = { top, right, bottom, left };

  return (
    <div
      className={styles.page}
      style={{
        "--x-pos": x,
        "--y-pos": y,
        "--background-c": background,
        "--z-idx": z,
      }}
    >
      Area – {x}:{y}
      {["top", "right", "bottom", "left"].map((c) => (
        <div
          key={c}
          className={[styles.gradient, styles[c]].join(" ")}
          style={{ "--gradient-color": colors[c] }}
        />
      ))}
    </div>
  );
};

export { GradientPage };
