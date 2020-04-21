import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreById } from "../../store/genreDetails/actions";
import { selectGenreDetails, selectGenreRelations } from "../../store/genreDetails/selectors";
import { selectToken } from "../../store/user/selectors";

import Header from "./Header";
import RelatedGenres from "./RelatedGenres";
import GenreInfo from "./GenreInfo";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#f5f5f5",
  },
}));

export default function GenreDetails() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  const { id } = useParams();
  const genre = useSelector(selectGenreDetails);
  const relations = useSelector(selectGenreRelations);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // console.log("genre", genre, "relations", relations);
  

  useEffect(() => {
    dispatch(fetchGenreById(id));
  }, [dispatch, id]);

  return (
    <div className={classes.background}>
      <Header setSelected={setSelected} selected={selected} />

      <RelatedGenres genre={genre} relations={relations} />
      <GenreInfo genre={genre} />
    </div>
  );
}
