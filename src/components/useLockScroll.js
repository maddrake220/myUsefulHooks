import { useState, useEffect } from "react";

const useLockScroll = () => {
  const [isLocked, setisLocked] = useState(false);

  function lockScroll() {
    document.body.style.overflow = "hidden";
    setisLocked(true);
  }

  function unlockScroll() {
    document.body.style.overflow = "visible";
    setisLocked(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", lockScroll);
    window.addEventListener("scroll", unlockScroll);

    return () => {
      window.removeEventListener("scroll", lockScroll);
      window.removeEventListener("scroll", unlockScroll);
    };
  }, [isLocked]);
  return [isLocked, { lockScroll, unlockScroll }];
};

export default useLockScroll;
