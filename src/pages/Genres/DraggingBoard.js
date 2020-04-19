import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/genres/actions";
import {
  selectGenres,
  selectGenreRelations,
} from "../../store/genres/selectors";
import GenreItem from "./GenreItem";
import RelationLine from "./RelationLine";

export default function DraggingBoard() {
  const [tiles, setTiles] = useState({});
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState({ loading: "true" });
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const relations = useSelector(selectGenreRelations);
  const constraintsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  // console.log("tiles", tiles);
  if (!genres) return <h5>Loading</h5>;

  if (genres.length === 0) return <h5>Loading</h5>;
  // if (lines.length === 0) return <h5>Loading</h5>;

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

    const relationsAddedXY = addTopLeftLine(relations);


    Object.keys(initialState).forEach((tileId) => {
      const tile = initialState[tileId];
      // console.log("tiles in the setting", tile);
      
      const newArray = () => relationsAddedXY.map((line) => {
        // console.log("yeste, isto je genreId", line);

        if (tile.id === line.genreId) {
          console.log("what are my tiles", tile.top, tile.left);
          
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
        } 
        else {
          return line;
        }
      });

      return newArray;
      // setLines(newArray);
    });

    // console.log("newArray", newArray);

    setLines(relationsAddedXY);
    setLoading({ loading: "false" });
  }
  console.log("lines", lines);

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

        setLines((lines) => {
          return lines.map((line, index) => {
            // console.log("yeste, isto je genreId", line);

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
    border: "5px dotted rgb(29, 64, 255)", 
    borderRadius: "20px",
    height: 870,
    width: "100%",
  };

  return (
    <div
      ref={constraintsRef}
      style={boardStyle}
      onMouseUp={stopDragging}
      onMouseMove={onDrag}
    >
      {Object.keys(tiles).map((id) => {
        const tile = tiles[id];
        return (
          <GenreItem
            id={id}
            startDragging={startDragging}
            tile={tile}
            key={id}
            setTiles={setTiles}
            tiles={tiles}
            forwardedRef={constraintsRef}
          />
        );
      })}

      {/* TESTING NEW SVG */}
      <svg height="870" width="100%">
        {lines.map((line) => {
          return (
            // <RelationLine />
            <line
              strokeWidth="1px"
              stroke="#3f51b5"
              x1={line.genLX}
              y1={line.genTY}
              x2={line.othGenLX}
              y2={line.othGenTY}
              id={line.id}
              key={line.id}
            />
            // <path
            //   d="M100,200
            //  Q350,100 600,300"
            //   x1={line.x1}
            //   y1={line.y1}
            //   x2={line.x2}
            //   y2={line.y2}
            //   fill="none"
            //   stroke="#000"
            //   strokeWidth="2px"
            //   key={line.id}
            // />
          );
        })}
      </svg>
    </div>
  );
}
