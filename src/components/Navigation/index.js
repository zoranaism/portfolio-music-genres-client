import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import Navigation from "./Navigation";
import "./styles.css";

const backgroundVariants = {
  open: { opacity: 1, zIndex: 1 },
  closed: { opacity: 0, zIndex: 0 }
};

export const MainNavContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      ref={containerRef}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="main-navigation"
    >
      <motion.div className="background" variants={backgroundVariants} />
      <Navigation />
      <MenuToggle toggle={() => setOpen(!isOpen)} />
    </motion.nav>
  );
};
