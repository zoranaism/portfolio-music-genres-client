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
  }, []);

  useEffect(() => {
    console.log("USE EFFECT LINE 29", genres, tiles[1]);

    if (genres) {
      console.log("IT STARTED REFETCHING");
      const top = -20;
      const left = 760;
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

      // HARDCODED FOR THE DEMO DAY
      initialState[1].top = 100;
      initialState[1].left = 200;
      initialState[2].top = 70;
      initialState[2].left = 770;
      initialState[3].top = 270;
      initialState[3].left = 1170;
      initialState[4].top = 370;
      initialState[4].left = 270;
      initialState[5].top = 670;
      initialState[5].left = 570;
      initialState[6].top = 250;
      initialState[6].left = 570;
      initialState[7].top = 500;
      initialState[7].left = 870;
      // HARDCODED FOR THE DEMO DAY

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
    
  }, [genres, relations]);

  function calculateLines(lines, tile) {
    
    console.log("FUNCTION IS CALLED");
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

  console.log("TILES NEW FETCH", tiles);

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
            <>
              <DraggingBoard
                tiles={tiles}
                setTiles={setTiles}
                lines={lines}
                setLines={setLines}
                genres={genres}
                relations={relations}
                calculateLines={calculateLines}
              />
              <NewGenreForm genres={genres} />
            </>
          )}
        </Box>
      </Container>
    </motion.div>
  );
}
