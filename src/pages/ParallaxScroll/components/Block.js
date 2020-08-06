import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useViewportScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";

import styles from "./Block.module.scss";

const ParallaxBlock = ({ windowWidth, windowHeight }) => {
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  // const opacity = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
  //   clamp: false,
  // });

  const xRange = [
    elementTop - windowHeight * 0.8,
    elementTop - windowHeight * 0.5,
    elementTop + elementTop + windowHeight * 0.3,
    elementTop + elementTop + windowHeight * 0.5,
  ];

  // const xRange = [-200, -100, 100, 200];

  const opacityRange = [0.25, 1, 1, 0.25];
  const opacity = useTransform(scrollY, xRange, opacityRange);

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0.1, 0], {
    clamp: false,
  });
  const ySpring = useSpring(y, {
    damping: 10,
    stiffness: 50,
  });

  const ySpring2 = useSpring(y, {
    damping: 8,
    stiffness: 40,
  });

  const ySpring3 = useSpring(y, {
    damping: 6,
    stiffness: 30,
  });

  useLayoutEffect(() => {
    setElementTop(ref.current.offsetTop);
    setElementHeight(ref.current.clientHeight);
  }, [ref, windowHeight]);

  return (
    <div className={styles.block} ref={ref}>
      <motion.div style={{ opacity }}>
        <motion.span style={{ y: ySpring }}>Block</motion.span>
        <motion.span style={{ y: ySpring2 }}>Of</motion.span>
        <motion.span style={{ y: ySpring3 }}>Text</motion.span>
      </motion.div>
    </div>
  );
};

export default ParallaxBlock;
