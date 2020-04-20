import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Header from "./Header";


const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function GenreDetails() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      <Header setSelected={setSelected} selected={selected}/>

      <Grid container justify="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <div className={classes.paper}>
            <Paper elevation={2}>
              
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
