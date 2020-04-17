import * as React from "react";
import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import MenuItem from "./MenuItem";

export default function Navigation() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

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

  return (
    <motion.ul variants={variants}>
      <MenuItem path="/" linkText="Genres" />
      <MenuItem path="/other" linkText="Other" />
      {loginLogoutControls}
    </motion.ul>
  );
}
