import React from "react";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../../components/Loading";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
    // textAlign: "center",
    top: "70px",
    paddingTop: "30px",
  },
  title: {
    color: "white",
    ...theme.typography.button,
  },
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  header: {
    ...theme.typography.overline,
    fontSize: "20px",
    marginBottom: 10,
    lineHeight: 1.2,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FavGenres({ likes }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <Paper
          style={{
            position: "relative",
            height: "320px",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <Grid item xs={12} style={{ position: "relative", height: "370px" }}>
            <Box pb={1} pl={3} pt={2} pb={0}>
              <Typography variant="h6" className={classes.header} gutterBottom>
                Fav genres
              </Typography>
            </Box>
            <Divider />

            <GridList className={classes.gridList}>
              {!likes ? (
                <Loading />
              ) : (
                likes.map((genre) => (
                  <GridListTile key={genre.id} style={{ width: "200px" }}>
                    <img src={genre.img} alt="" />

                    <GridListTileBar
                      title={genre.name}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <Link
                          to={`/genres/${genre.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <IconButton aria-label={`Title`}>
                            <KeyboardArrowRightIcon className={classes.title} />
                          </IconButton>
                        </Link>
                      }
                    ></GridListTileBar>
                  </GridListTile>
                ))
              )}
            </GridList>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
