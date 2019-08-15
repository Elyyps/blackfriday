import { useState, useEffect } from "react";
import { debounce } from "./debounce";

export const useScrollPosition = (delay: number): number => {
  if (typeof window === "undefined") return 0;

  // Store the state
  const [scrollPos, setScrollPos] = useState<number>(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    debounce(setScroll, delay);
  };

  const setScroll = () => {
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
