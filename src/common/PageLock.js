import { useEffect } from "react";

const PageLock = () => {
  useEffect(() => {
    document.body.classList.add("page-lock");
    document.documentElement.classList.add("page-lock");

    return () => {
      document.body.classList.remove("page-lock");
      document.documentElement.classList.remove("page-lock");
    };
  }, []);

  return null;
};

export { PageLock };
