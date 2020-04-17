import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/genres/actions";
import { selectGenres, selectGenreRelations } from "../../store/genres/selectors";
import GenreItem from "./GenreItem";

export default function DraggingBoard() {
  const [tiles, setTiles] = useState({});
  const [lines, setLines] = useState({});
  const [loading, setLoading] = useState({ loading: "true" });
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const relations = useSelector(selectGenreRelations);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  console.log("relations",  relations);


  const initialLine = [
    {
      x1: "0",
      y1: "0",
      x2: "700",
      y2: "500",
      id: "1",
    },
    {
      x1: "700",
      y1: "10",
      x2: "600",
      y2: "500",
      id: "2",
    },
    {
      x1: "20",
      y1: "200",
      x2: "700",
      y2: "900",
      id: "3",
    },
  ];

  if (!genres) return <h5>Loading</h5>;

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

    setTiles(initialState);
    // console.log("initialState", initialState);
    setLoading({ loading: "false" });
  }

  const startDragging = (e, id) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    // console.log("started dragging", mouseDown);
    setTiles((t) => {
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
        // consolconsole.log("drag", dx, dy);
        setTiles((t) => {
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
      setTiles((t) => ({
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
    height: 900,
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

      {/* TESTING NEW SVG */}
      <svg height="900" width="100%">
        {initialLine.map((line) => {
          return (
            <line
              strokeWidth="1px"
              stroke="#000000"
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              id={line.id}
              key={line.id}
            />
          );
        })}
        <path
          d="M100,200
             Q350,100 600,300"
          fill="none"
          stroke="#000"
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
}
