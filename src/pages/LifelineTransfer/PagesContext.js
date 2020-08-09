import React, { createContext, useState, useContext, useCallback } from "react";

const PagesContext = createContext({
  meander: false,
  setMeander: () => {},
  onResetPages: () => {},
});

const PagesProvider = ({ children }) => {
  const [meander, setMeander] = useState(false);
  // const location = useLocation();

  const onResetPages = useCallback(() => {
    setMeander(false);
  }, []);

  const value = {
    meander,
    setMeander,
    onResetPages,
  };

  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
};

export const usePagesContext = () => useContext(PagesContext);

export default PagesProvider;
