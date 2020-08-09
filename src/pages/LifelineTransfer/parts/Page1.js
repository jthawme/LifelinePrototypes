import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Line } from "./line.svg";

import styles from "./Page.module.scss";
import { usePagesContext } from "../PagesContext";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  initial: ({ meander }) => {
    if (meander) {
      return {
        opacity: 0,
        y: "50%",
      };
    }

    return { x: "-100%" };
  },
  enter: { x: 0, y: 0, opacity: 1, transition },
  exit: {
    x: "-100%",
    transition: { duration: 1.5, ...transition },
  },
};

const Page1 = () => {
  const { meander, onResetPages } = usePagesContext();

  useEffect(() => {
    onResetPages();
  }, [onResetPages]);

  return (
    <motion.div
      custom={{ meander }}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className={styles.page}
    >
      Page 1 <Link to="/lifeline/other">Go to next page</Link>
      <div className={[styles.left, styles.svgConnect].join(" ")}>
        <Left />
      </div>
      <div className={[styles.left, styles.svgLine].join(" ")}>
        <Line />
      </div>
    </motion.div>
  );
};

export default Page1;
