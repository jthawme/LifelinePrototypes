import ParallaxScroll from "../ParallaxScroll/ParallaxScroll";
import LifelineTransfer from "../LifelineTransfer/LifelineTransfer";
import Gradients from "../Gradients/Gradients";
import SwipeDirections from "../SwipeDirections/SwipeDirections";
import TextPositioning from "../TextPositioning/TextPositioning";
import BrokenWords from "../BrokenWords/BrokenWords";
import ScrollPercentage from "../ScrollPercentage/ScrollPercentage";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import CurvedText from "../CurvedText/CurvedText";

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
  {
    to: "/directions",
    label: "Directions test 001",
    component: SwipeDirections,
  },
  {
    to: "/text",
    label: "Text positioning 001",
    component: TextPositioning,
  },
  {
    to: "/words",
    label: "Broken Words 001",
    component: BrokenWords,
  },
  {
    to: "/percentage",
    label: "Scrolling homepage 002",
    component: ScrollPercentage,
  },
  {
    to: "/horizontal",
    label: "Horizontal sections 001",
    component: HorizontalScroll,
  },
  {
    to: "/curve",
    label: "Curved Text 001",
    component: CurvedText,
  },
];
