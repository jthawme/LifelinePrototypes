import React from "react";
import { useSwipeable } from "react-swipeable";
import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";

import styles from "./Block.module.scss";
import { useHistory } from "react-router-dom";

const Block = ({ children, background }) => {
  const history = useHistory();

  const xPos = useMotionValue(0);
  const handlers = useSwipeable({
    onSwiped: () => {
      xPos.set(0);
    },
    onSwiping: (e) => {
      xPos.set(e.deltaX);
    },
    onSwipedLeft: (e) => {
      if (e.deltaX >= 100) {
        history.push(`/directions/page/${background.substring(1)}`);
      }
    },
  });

  const x = useTransform(xPos, [0, 400], [0, -100]);
  const opacity = useTransform(xPos, [0, 200], [0, 1]);
  const xSpring = useSpring(x, {
    stiffness: 100,
    damping: 100,
  });

  return (
    <motion.div
      className={styles.block}
      style={{ backgroundColor: background, x: xSpring }}
      {...handlers}
    >
      {children}

      <motion.div className={styles.arrow} style={{ opacity }}>
        →
      </motion.div>
    </motion.div>
  );
};

export default Block;
