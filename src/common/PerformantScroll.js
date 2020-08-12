import { useEffect } from "react";

export const usePerformanceScroll = (cb = () => {}) => {
  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;

    const update = () => {
      cb(lastY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onScroll = () => {
      lastY = window.scrollY;
      requestTick();
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [cb]);
};
