import React from "react";

import styles from "./BrokenWords.module.scss";
import { WordsBlock } from "./parts/Block";

const WORDS = [
  {
    children: "Talking to",
    x: 0,
  },
  {
    children: "my parents",
    align: "center",
    x: -10,
  },
  {
    children: "about",
    align: "right",
    x: -10,
  },
  {
    children: "death",
    highlight: true,
    underline: true,
  },
  {
    children: "is impossible",
    align: "right",
  },
];

const BrokenWords = () => {
  return (
    <main className={styles.main}>
      <WordsBlock words={WORDS} />
    </main>
  );
};

export default BrokenWords;
