import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  header: {
    ...theme.typography.button,
    fontSize: "25px",
  },
  menu: {
    position: "absolute",
    right: "30px",
    top: "80px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  like: {
    borderRadius: "100%",
  },
}));

export default function Header({ setSelected, selected }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <div className={classes.menu}>
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              className={classes.like}
              style={{ color: selected ? "red" : "gray" }}
            >
              <FavoriteIcon />
            </ToggleButton>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Fab color="primary" variant="extended">
                <ArrowBackIosRoundedIcon className={classes.extendedIcon} />
                back to Genres
              </Fab>
            </Link>
          </div>

          <Box pt={10} mb={5}>
            <Typography className={classes.header}>
              Genre Name
              <br />
            </Typography>
            <Typography variant="h6" gutterBottom>
              <small>One line description about the genre</small>
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </div>
  );
}
