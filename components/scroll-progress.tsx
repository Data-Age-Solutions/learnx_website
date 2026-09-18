"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A hairline across the very top of the window that fills as the page is read.
 * Sits one layer above the navbar so it reads as the lip of the bar rather
 * than a stripe floating underneath it.
 *
 * The raw scroll value tracks the wheel exactly, which looks mechanical — a
 * spring lets it settle a beat behind, which is what makes it feel physical.
 */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Nothing here carries meaning that is not already obvious from the
  // scrollbar, so for a reader who opts out of motion it simply does not run.
  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-teal-400 via-teal-500 to-[#7C3AED]"
    />
  );
}
