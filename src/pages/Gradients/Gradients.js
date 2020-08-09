import React, { useState } from "react";

import styles from "./Gradients.module.scss";
import { PageLock } from "../../common/PageLock";
import { GradientPage } from "./parts/GradientPage";

const Gradients = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0, i: 0 });

  return (
    <main className={styles.container}>
      <PageLock />
      <div
        className={styles.slider}
        style={{
          transform: `translate3d(${coords.x * -1 * 100}%, ${
            coords.y * -1 * 100
          }%, 0)`,
        }}
      >
        <GradientPage x={0} y={0} bottom={"#00f"} right={"#ff0"} />
        <GradientPage x={1} y={0} bottom={"#f0f"} background={"#ff0"} />
        <GradientPage x={0} y={1} right={"#f0f"} background={"#00f"} />
        <GradientPage x={1} y={1} background={"#f0f"} z={3} />
      </div>

      <div className={styles.key}>
        {[
          { x: 0, y: 0, i: 0 },
          { x: 1, y: 0, i: 1 },
          { x: 0, y: 1, i: 2 },
          { x: 1, y: 1, i: 3 },
        ].map((obj, idx) => (
          <button
            className={obj.i === coords.i ? styles.active : ""}
            onClick={() => setCoords(obj)}
          >
            {idx}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Gradients;
