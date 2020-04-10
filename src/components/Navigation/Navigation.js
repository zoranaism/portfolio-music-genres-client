import * as React from "react";
import { motion, Variants } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const variants = {
  open: {
    zIndex: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  closed: {
    zIndex: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const variant = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <motion.li
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/">Genres</Link>
    </motion.li>
    <motion.li
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/signup">SignUp</Link>
    </motion.li>
    <motion.li
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/login">Login</Link>
    </motion.li>
    <motion.li
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/other">Other</Link>
    </motion.li>
    <motion.li
      variants={variant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/other">Logout</Link>
    </motion.li>
    
  </motion.ul>
);

// Variants
// These control the staggering of child items

// const variants: Variants = {
//   open: {
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.07
//     }
//   },

// };
