import React from "react";
import GenreItem from "./GenreItem";
import RelationLine from "./RelationLine";

export default function DraggingBoard(props) {
  const { tiles, setTiles, lines, setLines, calculateLines } = props;

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
        // console.log("dragging", dx, dy);

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

        setLines(calculateLines(lines, tile));
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
    border: "5px dotted rgb(15, 28, 97)",
    borderRadius: "20px",
    height: 870,
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
            setTiles={setTiles}
            tiles={tiles}
          />
        );
      })}

      <svg height="870" width="100%">
        {lines.map((line) => {
          return <RelationLine key={line.id} line={line} setLines={setLines} />;
        })}
      </svg>
    </div>
  );
}
