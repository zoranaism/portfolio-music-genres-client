import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchGenres } from "../../store/genres/actions";
import {
  selectGenres,
  selectGenreRelations,
} from "../../store/genres/selectors";
import DraggingBoard from "./DraggingBoard";
import NewGenreForm from "./NewGenreForm";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { pageTransitions, pageVariants, pageStyle } from "../pageTransitions";
import Loading from "../../components/Loading";

export default function Genres() {
  const [tiles, setTiles] = useState({});
  const [lines, setLines] = useState([]);
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const relations = useSelector(selectGenreRelations);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (!genres) return <Loading />;

  if (!tiles[1]) {
    const top = -20;
    const left = 60;
    const addTopLeft = (elements, x, y) =>
      elements.map((element) => {
        const newElement = { ...element, top: (x += 40), left: y };
        return newElement;
      });

    const genresAddedXY = addTopLeft(genres, top, left);

    const arrayToObject = (array, keyField) =>
      array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

    const initialState = arrayToObject(genresAddedXY, "id");

    //  initial tile state is set
    setTiles(initialState);

    const addTopLeftLine = (elements) =>
      elements.map((element) => {
        const newElement = {
          ...element,
          genLX: 0,
          genTY: 0,
          othGenLX: 0,
          othGenTY: 0,
        };
        return newElement;
      });

    let linesArray = addTopLeftLine(relations);

    Object.keys(initialState).forEach((tileId) => {
      const tile = initialState[tileId];

      linesArray = calculateLines(linesArray, tile);
    });
    setLines(linesArray);
  }

  function calculateLines(lines, tile) {
    return lines.map((line) => {
      if (tile.id === line.genreId) {
        return {
          ...line,
          genTY: tile.top + 15,
          genLX: tile.left + 80,
        };
      }
      if (tile.id === line.otherGenreId) {
        return {
          ...line,
          othGenTY: tile.top + 15,
          othGenLX: tile.left + 80,
        };
      } else {
        return line;
      }
    });
  }

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <Container maxWidth={false} style={{ padding: "30px" }}>
        <Box
          style={{
            padding: "5px",
            backgroundColor: "#cdd3f5",
            borderRadius: "20px",
            backgroundImage: "radial-gradient(rgb(217, 222, 247), #dfe5f1)",
          }}
        >
          {!genres ? (
            <Loading />
          ) : (
            <DraggingBoard
              tiles={tiles}
              setTiles={setTiles}
              lines={lines}
              setLines={setLines}
              genres={genres}
              relations={relations}
              calculateLines={calculateLines}
            />
          )}

          <NewGenreForm genres={genres}/>
        </Box>
      </Container>
    </motion.div>
  );
}
