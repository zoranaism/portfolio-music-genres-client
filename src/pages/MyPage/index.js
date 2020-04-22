import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getUserWithStoredToken } from "../../store/user/actions";
import {
  selectUser,
  selectToken,
  selectUserLikes,
} from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

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
// import Fab from "@material-ui/core/Fab";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ToggleButton from "@material-ui/lab/ToggleButton";
// import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Avatar from "@material-ui/core/Avatar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransitions, pageVariants, pageStyle } from "../pageTransitions";
import Badge from "@material-ui/core/Badge";

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
    paddingTop: "30px",
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
  padding: {
    padding: "20px 30px 10px",
  },
  mainHeader: {
    ...theme.typography.button,
    fontSize: "25px",
  },
  header: {
    ...theme.typography.overline,
    fontSize: "20px",
    marginBottom: 10,
    lineHeight: 1.2,
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
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    margin: "0 auto",
  },
  badge: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

// const defaultProps = {
//   color: 'secondary',
//   children: <Avatar />,
// };

export default function MyPage() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const token = useSelector(selectToken);
  const classes = useStyles();
  const likes = useSelector(selectUserLikes);

  // if (!user.isAdmin) {

  // }
  if (token === null) {
    history.push("/");
  }
  console.log("selectUser", user);

  if (!likes) return <h5>Loading</h5>;

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
            <Box pt={10} mb={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={2}>
                  <Badge
                    color="primary"
                    badgeContent="Admin"
                    style={{ visibility: user.isAdmin ? "visible" : "none" }}
                  >
                    <Avatar
                      alt="My profile"
                      src={user.image}
                      className={classes.large}
                    />
                  </Badge>
                </Grid>

                {/* <Badge badgeContent="Admin" {...defaultProps} /> */}
                <Grid item xs={12} sm={2}>
                  <Typography className={classes.mainHeader}>
                    {user.name}
                    <br />
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    <small>{user.email}</small>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/*  */}

        <Grid container spacing={4}>
          <Grid xs={12} sm={6} item>
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
                    Music genres I like
                  </Typography>
                </Box>
                <Divider />
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ padding: "20px" }}
                >
                  {user.music}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={12} sm={6} item>
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
                    About me
                  </Typography>
                </Box>
                <Divider />
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ padding: "20px" }}
                >
                  {user.about}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Paper
            style={{
              position: "relative",
              height: "320px",
              width: "100%",
              marginBottom: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              style={{ position: "relative", height: "370px" }}
            >
              <Box pb={1} pl={3} pt={2} pb={0}>
                <Typography
                  variant="h6"
                  className={classes.header}
                  gutterBottom
                >
                  Fav genres
                </Typography>
              </Box>
              <Divider />

              <GridList className={classes.gridList}>
                {likes.map((genre) => (
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
                ))}
              </GridList>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </motion.div>
  );
}
