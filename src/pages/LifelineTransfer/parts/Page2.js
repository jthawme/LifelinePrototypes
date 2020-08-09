import React, { useCallback } from "react";
import { motion } from "framer-motion";

import styles from "./Page.module.scss";
import { useHistory } from "react-router-dom";

import { ReactComponent as Right } from "./right.svg";
import { ReactComponent as Line } from "./line.svg";
import { usePagesContext } from "../PagesContext";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  initial: { x: "100%" },
  enter: { x: 0, transition },
  exit: ({ meander }) => {
    if (meander) {
      return {
        y: "-50%",
        opacity: 0,
        transition: { ...transition },
      };
    }

    return {
      x: "100%",
      transition: { ...transition },
    };
  },
};

const Page2 = () => {
  const { setMeander, meander } = usePagesContext();
  const history = useHistory();
  const onClick = useCallback(() => {
    setMeander(true);
    history.push("/lifeline");
  }, [history, setMeander]);

  return (
    <motion.div
      custom={{ meander }}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className={styles.page}
    >
      Page 2 <button onClick={onClick}>Exit to home page</button>
      <div className={[styles.right, styles.svgConnect].join(" ")}>
        <Right />
      </div>
      <div className={[styles.right, styles.svgLine].join(" ")}>
        <Line />
      </div>
    </motion.div>
  );
};

export default Page2;
