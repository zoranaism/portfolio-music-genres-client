import React from "react";
import "./spinner.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { motion } from "framer-motion";
// import { pageTransitions } from "../../pages/pageTransitions";

const useStyles = makeStyles((theme) => ({
  loader: {
    color: "white",
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <motion.div className="loading_spinner" initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}  >
      <CircularProgress className={classes.loader} />
    </motion.div>
  );
}
