import React from "react";
import "./spinner.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  loader: {
    color: "white",
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className="loading_spinner" >
      <CircularProgress className={classes.loader} />
    </div>
  );
}
