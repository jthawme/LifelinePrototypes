import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import Block from "./parts/Block";
import OtherPage from "./parts/OtherPage";

import styles from "./SwipeDirections.module.scss";

const transition = { duration: 1 };
const variants = {
  initial: { opacity: 0, y: "50%" },
  enter: { x: 0, y: 0, opacity: 1, transition },
  exit: {
    x: "-200%",
    transition,
  },
};

const colors = [
  "#71bcee",
  "#ee719a",
  "#b3ee71",
  "#eea571",
  "#b271ee",
  "#dbee71",
  "#2428a9",
];

const SwipeDirections = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {/* <Route exact path="/lifeline" component={Page1} />
        <Route exact path="/lifeline/other" component={Page2} /> */}
        <Route path="/directions/page/:color?" component={OtherPage} />
        <Route>
          <motion.main
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            className={styles.main}
          >
            {colors.map((c) => (
              <Block background={c}>
                <p>This is a potential story</p>
                <p>Swipe me!</p>
              </Block>
            ))}
          </motion.main>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default SwipeDirections;
