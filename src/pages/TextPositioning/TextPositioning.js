import React, { useRef, useCallback, useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./TextPositioning.module.scss";

const TextPositioning = () => {
  const [position, setPosition] = useState("top");

  const io = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.intersectionRect.height < e.boundingClientRect.height * 0.5) {
            setPosition(e.boundingClientRect.top < 0 ? "bottom" : "top");
          } else {
            setPosition("center");
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    )
  );

  const onRef = useCallback((ref) => {
    if (ref) {
      io.current.observe(ref);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => io.current.disconnect();
  }, []);

  const cls = classNames(styles.page, styles[position]);

  return (
    <main className={styles.wrapper}>
      <div className={cls} ref={onRef}>
        <h1>
          This text positions itself
          <br />
          differently on scroll
        </h1>
      </div>
    </main>
  );
};

export default TextPositioning;
