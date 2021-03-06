import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
  },
}));

export default function MenuItem(props) {
  const classes = useStyles();
  
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="nav-item"
    >
      <Link as={NavLink} to={props.path}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Icon>{props.FavoriteIcon}</Icon> */}
          <div className={classes.root}>{props.linkText}</div>
        </div>
      </Link>
    </motion.li>
  );
}
