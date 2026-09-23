"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const SESSION_KEY = "intro-shown";
const AUTO_DISMISS_MS = 1600;

export function LoadingIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable — just skip the intro
      alreadyShown = true;
    }
    if (alreadyShown) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time session-based intro flag
    setShow(true);
    const timer = setTimeout(() => dismiss(), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setShow(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Skip intro"
          onClick={dismiss}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") dismiss();
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl font-medium text-gradient"
          >
            {site.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
