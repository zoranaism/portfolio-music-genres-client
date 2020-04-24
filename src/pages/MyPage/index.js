import React from "react";
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
import Container from "@material-ui/core/Container";
import { motion } from "framer-motion";
import { pageTransitions, pageVariants, pageStyle } from "../pageTransitions";
import Header from "./Header";
import About from "./About";
import MusicILike from "./MusicILike";
import FavGenres from "./FavGenres";

export default function MyPage() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const token = useSelector(selectToken);
  const likes = useSelector(selectUserLikes);

  // if (!user.isAdmin) {

  // }
  if (token === null) {
    setTimeout(() => {
      history.push("/");
    }, 0);
  }

  // console.log("selectUser", user);

  // if (!likes) return <h5>Loading</h5>;

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
        <Header user={user} />

        <Grid container spacing={4}>
          <Grid xs={12} sm={6} item>
            <MusicILike user={user} />
          </Grid>

          <Grid xs={12} sm={6} item>
            <About user={user} />
          </Grid>
        </Grid>

        <FavGenres likes={likes} />
      </Container>
    </motion.div>
  );
}
