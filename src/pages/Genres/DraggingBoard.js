import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/genres/actions";
import { selectGenres } from "../../store/genres/selectors";
import GenreItem from "./GenreItem";

export default function DraggingBoard() {
  const [tiles, set_tiles] = useState({});
  const [loading, set_loading] = useState({ loading: "true" });
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  // console.log("loading", loading);

  if (genres.length === 0) return <h5>Loading</h5>;

  if (!tiles[1]) {
    const top = -20;
    const left = 60;
    const addTopLeft = (elements, x, y) =>
      elements.map((element) => {
        const newElement = { ...element, top: (x += 40), left: y };
        // console.log("newElement", newElement);
        return newElement;
      });

    const genresAddedXY = addTopLeft(genres, top, left);

    const arrayToObject = (array, keyField) =>
      array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        // console.log("obj", obj);
        return obj;
      }, {});

    const initialState = arrayToObject(genresAddedXY, "id");

    set_tiles(initialState);
    console.log("initialState", initialState);
    set_loading({ loading: "false" });
  }

  const startDragging = (e, id) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    // console.log("started dragging", mouseDown);
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
        console.log("drag", dx, dy);
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
    console.log("stopped");
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
    <div style={boardStyle} onMouseUp={stopDragging} onMouseMove={onDrag}>
      {Object.keys(tiles).map((id) => {
        const tile = tiles[id];
        return (
          <GenreItem
            id={id}
            startDragging={startDragging}
            tile={tile}
            key={id}
          />
        );
      })}
    </div>
  );
}
