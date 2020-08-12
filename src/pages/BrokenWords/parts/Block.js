import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Block.module.scss";

import { ReactComponent as Underline } from "./underline.svg";

const WordsBlockWord = ({
  children,
  x = 0,
  underline,
  align = "left",
  highlight,
  show,
  onRef,
}) => {
  const cls = classNames(
    styles.word,
    { [styles.show]: show },
    { [styles.highlight]: highlight },
    styles[align]
  );

  return (
    <div className={cls} ref={onRef} style={{ "--x-pos": x }}>
      <span>
        {children} {underline && <Underline />}
      </span>
    </div>
  );
};

const WordsBlock = ({ words }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.block}>
      <button onClick={() => setShow(!show)}>toggle</button>
      {words.map((word, index) => (
        <WordsBlockWord key={index} {...word} show={show} />
      ))}
    </div>
  );
};

export { WordsBlock };
