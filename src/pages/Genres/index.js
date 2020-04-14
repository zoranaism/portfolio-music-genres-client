import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/genres/actions";
import { selectGenres } from "../../store/genres/selectors";
import GenreCard from "../../components/GenreCard";
// import MyDraggingBoard from "./board";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Genres() {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  const initialState = {
    1: {
      name: "Ambient Music",
      top: 10,
      left: 60,
    },
    2: {
      name: "Space Rock",
      top: 50,
      left: 60,
    },
    3: {
      name: "Shoegaze",
      top: 90,
      left: 60,
    },
  };
  const [tiles, set_tiles] = useState(initialState);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const startDragging = (e, id) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    console.log("started dragging", mouseDown);
    set_tiles((t) => {
      return {
        ...t,
        [id]: {
          ...t[id],
          dragstate: {
            mouseDown,
            original: { x: t[id].left, y: t[id].top },
          },
        },
      };
    });
  };

  const onDrag = (e) => {
    Object.keys(tiles).forEach((tileId) => {
      const tile = tiles[tileId];
      if (tile.dragstate) {
        const dx = e.clientX - tile.dragstate.mouseDown.x;
        const dy = e.clientY - tile.dragstate.mouseDown.y;
        // console.log("drag", dx, dy);
        set_tiles((t) => {
          return {
            ...t,
            [tileId]: {
              ...t[tileId],
              top: t[tileId].dragstate.original.y + dy,
              left: t[tileId].dragstate.original.x + dx,
            },
          };
        });
      } else {
      }
    });
  };

  const stopDragging = () => {
    // console.log("stopped");
    Object.keys(tiles).forEach((tileId) => {
      const tile = tiles[tileId];
      set_tiles((t) => ({
        ...t,
        [tileId]: {
          ...t[tileId],
          dragstate: undefined,
        },
      }));
    });
  };

  const boardStyle = {
    position: "relative",
    border: "2px solid black",
    height: 1000,
    width: "100%",
  };

  return (
    <div>
      <Container maxWidth={false}>
        <Box my={4}>
          <div style={boardStyle} onMouseUp={stopDragging} onMouseMove={onDrag}>
            {/* {genres.map((genre) => {
              return (
                <GenreCard
                  key={genre.id}
                  id={genre.id}
                  name={genre.name}
                  set_tile={set_tile}
                  value={tile}
                  value1={tile1}
                  value2={tile2}
                  startDragging={() => startDragging()}
                />
              );
            })} */}
            {Object.keys(tiles).map((id) => {
              const tile = tiles[id];
              return (
                <div
                  style={{
                    position: "absolute",
                    width: 160,
                    height: 30,
                    border: "1px solid black",
                    ...tile,
                  }}
                  id={id}
                  key={id}
                  onMouseDown={(event) => startDragging(event, id)}
                >
                  {tile.name}
                </div>
              );
            })}
          </div>
        </Box>
      </Container>
    </div>
  );
}
