import React from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HorizontalScroll.module.scss";
import { HorizontalPage } from "./parts/HorizontalPage";
import { VerticalPage } from "./parts/VerticalPage";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  initial: {
    y: "50%",
    opacity: 0,
  },
  enter: { x: 0, y: 0, opacity: 1, transition },
  exit: {
    x: "-100%",
    transition: { duration: 1.5, ...transition },
  },
};

const HorizontalScroll = () => {
  const location = useLocation();

  return (
    <div className={styles.main}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/horizontal/1" component={HorizontalPage} />
          <Route exact path="/horizontal/2" component={VerticalPage} />
          <Route>
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variants}
              className={styles.home}
            >
              <div className={styles.pad}>Long scrolling page</div>
              <div className={styles.pad}>To emulate a long page</div>
              <div className={styles.pad}>
                <Link to="/horizontal/1">Go to next page</Link>
              </div>
            </motion.div>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default HorizontalScroll;
