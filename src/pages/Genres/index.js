import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/genres/actions";
import { selectGenres } from "../../store/genres/selectors";
import GenreCard from "../../components/GenreCard";
import MyDraggingBoard from "./board"

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Genres() {
  const dispatch = useDispatch();
    const genres = useSelector(selectGenres);

  console.log("Genres HOME PGAE", genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth={false}>
        <Box my={4}>
            <MyDraggingBoard />
          {/* <GenreCard />
          <GenreCard />
          <GenreCard />
          <GenreCard /> */}


          {/* {genres.map((genre) => {
            return (
              <GenreCard
                key={genre.id}
                // key={genre.title}
                id={genre.id}
                title={genre.title}
                imageUrl={genre.imageUrl}
                hearts={genre.hearts}
                minimumBid={genre.minimumBid}
                userId={genre.userId}
                showLink={true}
                bids={genre.bids}
              />
            );
          })} */}
        </Box>
      </Container>
    </div>
  );
}
