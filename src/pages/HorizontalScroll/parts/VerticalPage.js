import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const VerticalPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      Last page <Link to="/horizontal">Home page</Link>
    </motion.div>
  );
};

export { VerticalPage };
