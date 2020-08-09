import React from "react";
import { motion } from "framer-motion";

import styles from "./OtherPage.module.scss";
import { Link } from "react-router-dom";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  initial: { x: "100%" },
  enter: { x: 0, y: 0, opacity: 1, transition },
  exit: {
    y: "-50%",
    opacity: 0,
    transition: { duration: 1, ...transition },
  },
};

const OtherPage = ({ match }) => {
  return (
    <motion.section
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className={styles.page}
      s
      style={{
        backgroundColor: match.params.color ? `#${match.params.color}` : "grey",
      }}
    >
      <h1>Hello!</h1>
      <p>
        <Link to="/directions">Back to homepage</Link>
      </p>
    </motion.section>
  );
};

export default OtherPage;
