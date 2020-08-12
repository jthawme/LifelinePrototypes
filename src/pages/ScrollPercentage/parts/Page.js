import React, { useMemo } from "react";
import { transform } from "framer-motion";

import styles from "./Page.module.scss";
import { clamp } from "../../../common/utils";

const Page = ({ onRef, percentage, words }) => {
  const transformed = useMemo(() => {
    return words.map((w, idx) => {
      return {
        text: w.children,
        opacity: w.highlight
          ? 1
          : transform(percentage, [0.6, 1], [0 - idx / 5, 1.4]),
        y: w.highlight ? transform(percentage, [0, 0.8], [-50, 0]) : 0,
      };
    });
  }, [percentage, words]);

  return (
    <section ref={onRef} className={styles.page}>
      page – {percentage}
      <br />
      <div className={styles.words}>
        {transformed.map((w) => (
          <div
            key={w.text}
            style={{
              opacity: `${clamp(w.opacity, 0, 1)}`,
              transform: `translate3d(0, ${w.y}vh, 0)`,
            }}
          >
            {w.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
