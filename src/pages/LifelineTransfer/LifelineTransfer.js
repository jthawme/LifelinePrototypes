import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PagesProvider from "./PagesContext";
import Page1 from "./parts/Page1";
import Page2 from "./parts/Page2";
import { PageLock } from "../common/PageLock";

const LifelineTransfer = () => {
  const location = useLocation();
  return (
    <PagesProvider>
      <PageLock />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/lifeline" component={Page1} />
          <Route exact path="/lifeline/other" component={Page2} />
        </Switch>
      </AnimatePresence>
    </PagesProvider>
  );
};

export default LifelineTransfer;
