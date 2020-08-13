import React, { useState } from "react";

import styles from "./CurvedText.module.scss";

const getCurve = (max = 200, offset = 150) => {
  const r = () => Math.floor(Math.random() * max) + offset;
  const curves = [
    `M ${r()} ${r()}`,
    ...new Array(Math.floor(Math.random() * 4) + 7).fill(0).map((v, i) => {
      if (i === 0) {
        return `Q ${r()} ${r()} ${r()} ${r()}`;
      } else {
        return `T ${r()} ${r()}`;
      }
    }),
  ];
  return curves.join(" ");
};

const CurvedText = () => {
  const [curve, setCurve] = useState(getCurve());
  const [text, setText] = useState("Type some text");
  const [showCurve, setShowCurve] = useState(false);

  const newCurve = () => {
    setCurve(getCurve());
  };

  return (
    <main className={styles.main}>
      <div class={styles.actions}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Type words"
        />
        <label>
          <span>Show curve</span>
          <input
            type="checkbox"
            onChange={(e) => setShowCurve(e.target.checked)}
            value={showCurve}
          />
        </label>
        <button type="button" onClick={newCurve}>
          New curve
        </button>
        <p>
          the curves will be purposefully whacky, because why not for a test
        </p>
      </div>

      <div className={styles.display}>
        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            d={curve}
            stroke={showCurve ? "black" : "transparent"}
            fill="transparent"
          />

          <text width="500" alignment-baseline="middle">
            <textPath xlinkHref="#curve">{text}</textPath>
          </text>
        </svg>

        {/* <svg viewBox="0 0 500 500">
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlinkHref="#curve">Dangerous Curves Ahead</textPath>
          </text>
        </svg> */}
      </div>
    </main>
  );
};

export default CurvedText;
