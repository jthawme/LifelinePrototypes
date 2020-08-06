import React from "react";
import useWindowDimensions from "react-hook-use-window-dimensions";

import ParallaxBlock from "./components/Block";
import styles from "./ParallaxScroll.module.scss";

const ParallaxScroll = () => {
  const { width, height } = useWindowDimensions();
  return (
    <main className={styles.container}>
      <ParallaxBlock windowWidth={width} windowHeight={height} />
      <ParallaxBlock windowWidth={width} windowHeight={height} />
      <ParallaxBlock windowWidth={width} windowHeight={height} />
    </main>
  );
};

export default ParallaxScroll;
