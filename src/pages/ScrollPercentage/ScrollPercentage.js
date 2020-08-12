import React, { useRef, useCallback, useState } from "react";

import styles from "./ScrollPercentage.module.scss";
import { usePerformanceScroll } from "../../common/PerformantScroll";
import Page from "./parts/Page";

const PAGES = [
  {
    slug: 0,
    words: [
      {
        children: "This",
      },
      {
        children: "is",
      },
      {
        children: "merely",
        highlight: true,
      },
      {
        children: "a",
      },
      {
        children: "test",
      },
    ],
  },
  {
    slug: 1,
    words: [
      {
        children: "This",
      },
      {
        children: "is",
      },
      {
        children: "another",
        highlight: true,
      },
      {
        children: "test",
      },
    ],
  },
  {
    slug: 2,
    words: [
      {
        children: "This",
      },
      {
        children: "is",
      },
      {
        children: "another",
        highlight: true,
      },
      {
        children: "test",
      },
    ],
  },
  {
    slug: 3,
    words: [
      {
        children: "This",
      },
      {
        children: "is",
      },
      {
        children: "also",
        highlight: true,
      },
      {
        children: "a",
      },
      {
        children: "test",
      },
    ],
  },
];

const ScrollPercentage = () => {
  const pageRefs = useRef(new Array(PAGES.length).fill(false));
  const [percentages, setPercentages] = useState({
    abs: new Array(PAGES.length).fill(1),
    pos: new Array(PAGES.length).fill(1),
  });

  usePerformanceScroll(() => {
    const newPercentages = [];
    const newPosPercentages = [];
    for (let i = 0; i < pageRefs.current.length; i++) {
      if (pageRefs.current[i]) {
        const cr = pageRefs.current[i].getBoundingClientRect();

        newPercentages.push((cr.height - Math.abs(cr.top)) / cr.height);
        newPosPercentages.push((cr.height - cr.top) / cr.height);
      } else {
        newPercentages.push(0);
        newPosPercentages.push(0);
      }
    }

    setPercentages({
      abs: newPercentages,
      pos: newPosPercentages,
    });
  });

  const onRef = useCallback((ref, index) => {
    pageRefs.current[index] = ref;
  }, []);

  return (
    <main className={styles.main}>
      <p>(this will jump at first scroll – thatd be fixed)</p>
      {PAGES.map((p, idx) => (
        <Page
          percentage={percentages.pos[idx]}
          key={p.slug}
          onRef={(ref) => onRef(ref, idx)}
          words={p.words}
        />
      ))}
    </main>
  );
};

export default ScrollPercentage;
