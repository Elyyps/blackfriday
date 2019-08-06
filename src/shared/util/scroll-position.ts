import { useState, useEffect } from "react";

export const useScrollPosition = (): number => {
  if (typeof window === "undefined") return 0;

  // Store the state
  const [scrollPos, setScrollPos] = useState<number>(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};
