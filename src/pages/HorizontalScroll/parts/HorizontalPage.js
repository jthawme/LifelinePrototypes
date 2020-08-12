import React, { useRef } from "react";

import { motion, useElementScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./Page.module.scss";
import { PageLock } from "../../../common/PageLock";

import { ReactComponent as Progress } from "./progress.svg";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  initial: {
    x: "100%",
  },
  enter: { x: 0, y: 0, opacity: 1, transition },
  exit: {
    x: "-100%",
    transition: { duration: 1.5, ...transition },
  },
};

const progressVariants = {
  initial: {
    x: "-50%",
    y: "50%",
    opacity: 0,
    transition,
  },
  enter: { x: "-50%", y: 0, opacity: 1, transition },
};

const HorizontalPage = () => {
  const ref = useRef();

  const { scrollXProgress } = useElementScroll(ref);
  const strokeOffset = useTransform(scrollXProgress, [0, 1], [610, 0]);

  return (
    <>
      <PageLock />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={styles.horizontal}
        ref={ref}
      >
        <div className={styles.horizontalPage}>
          Have to use your imagination...
        </div>
        <div className={styles.horizontalPage}>
          ...that there would be some visual direction...
        </div>
        <div className={styles.horizontalPage}>
          ...to get you to scroll left and right...
        </div>
        <div className={styles.horizontalPage}>
          ...but this is a feeling test{" "}
          <Link to="/horizontal/2">Next page</Link>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="enter"
        exit="initial"
        variants={progressVariants}
        className={styles.progress}
        style={{ "--stroke-offset": strokeOffset }}
      >
        <Progress />
      </motion.div>
    </>
  );
};

export { HorizontalPage };
