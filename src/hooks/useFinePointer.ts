"use client";

import { useEffect, useState } from "react";

/** True only for devices with a fine pointer (mouse/trackpad), false for touch. */
export function useFinePointer() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a browser API on mount
    setIsFine(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsFine(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return isFine;
}
