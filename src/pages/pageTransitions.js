import React from "react";
import { motion } from "framer-motion";

export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-200vh",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "200vh",
    scale: 1.2,
  },
};

export const pageTransitions = {
  duration: 0.8,
  type: "tween",
  // stiffness: 500,
  ease: "anticipate",
};

export const pageStyle = {
  position: "absolute",
  width: "100%"
};
