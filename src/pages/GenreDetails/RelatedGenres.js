import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading"

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
    // textAlign: "center",
    top: "70px",
    padding: "30px 0",
  },
  title: {
    color: "white",
    ...theme.typography.button,
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
    marginBottom: 0,
    lineHeight: 1.2,
  },
  padding: {
    padding: "20px 30px 10px",
  },
}));

export default function RelatedGenres({ genre, relations, otherRelations }) {
  const classes = useStyles();
  const concat = (...arrays) => [].concat(...arrays.filter(Array.isArray));
  const allRelations = concat(relations, otherRelations)

  console.log("allRelations", allRelations);
  

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Paper
            style={{
              position: "relative",
              height: "auto",
              width: "100%",
              marginBottom: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              style={{ position: "relative", height: "auto" }}
            >
              <Box pb={1} pl={3} pt={2} pb={0}>
                <Typography
                  variant="h6"
                  className={classes.header}
                  gutterBottom
                >
                  Related genres
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Genres that have influenced on or where influenced by this
                  genre
                </Typography>
              </Box>
              <Divider />
              <GridList className={classes.gridList}>

              {allRelations ? (allRelations.map((relation) => (
                  <GridListTile key={relation.id} style={{ width: "200px" }}>
                    <img src={relation.img} alt={relation.name} />

                    <GridListTileBar
                      title={relation.name}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <Link
                          to={`/genres/${relation.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <IconButton aria-label={`Title`}>
                            <KeyboardArrowRightIcon className={classes.title} />
                          </IconButton>
                        </Link>
                      }
                    ></GridListTileBar>
                  </GridListTile>
                )) ) : (<Loading />)}
              </GridList>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
