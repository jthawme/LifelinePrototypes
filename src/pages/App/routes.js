import ParallaxScroll from "../ParallaxScroll/ParallaxScroll";
import LifelineTransfer from "../LifelineTransfer/LifelineTransfer";
import Gradients from "../Gradients/Gradients";

export const routes = [
  {
    to: "/scroll",
    label: "Scrolling homepage 001",
    component: ParallaxScroll,
  },
  {
    to: "/lifeline",
    label: "Attaching lifeline 001",
    component: LifelineTransfer,
  },
  {
    to: "/gradients",
    label: "Gradients 001",
    component: Gradients,
  },
];
