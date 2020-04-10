import React, { useState } from "react";
import GenreCard from "../../components/GenreCard";

export default function MyDraggingBoard() {
  const [tile, set_tile] = useState({ top: 10, left: 60 });
  const [tile1, set_tile1] = useState({ top: 50, left: 60 });
  const [tile2, set_tile2] = useState({ top: 90, left: 60 });

  const startDragging = (e) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    console.log("started dragging", mouseDown);
    set_tile((t) => {
      return {
        ...t,
        dragstate: {
          mouseDown,
          original: { x: t.left, y: t.top },
        },
      };
    });
  };

  const startDragging1 = (e) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    console.log("started dragging", mouseDown);

    set_tile1((t) => {
      return {
        ...t,
        dragstate: {
          mouseDown,
          original: { x: t.left, y: t.top },
        },
      };
    });
  };

  const startDragging2 = (e) => {
    const mouseDown = { x: e.clientX, y: e.clientY };
    console.log("started dragging", mouseDown);

    set_tile2((t) => {
      return {
        ...t,
        dragstate: {
          mouseDown,
          original: { x: t.left, y: t.top },
        },
      };
    });
  };

  const onDrag = (e) => {
    if (tile.dragstate) {
      const dx = e.clientX - tile.dragstate.mouseDown.x;
      const dy = e.clientY - tile.dragstate.mouseDown.y;
      console.log("drag", dx, dy);
      set_tile((t) => {
        return {
          ...t,
          top: t.dragstate.original.y + dy,
          left: t.dragstate.original.x + dx,
        };
      });
    } else {
      console.log("no drag?");
    }
    if (tile1.dragstate) {
      const dx = e.clientX - tile1.dragstate.mouseDown.x;
      const dy = e.clientY - tile1.dragstate.mouseDown.y;
      console.log("drag", dx, dy);
      set_tile1((t) => {
        return {
          ...t,
          top: t.dragstate.original.y + dy,
          left: t.dragstate.original.x + dx,
        };
      });
    } else {
      console.log("no drag?");
    }
    if (tile2.dragstate) {
        const dx = e.clientX - tile2.dragstate.mouseDown.x;
        const dy = e.clientY - tile2.dragstate.mouseDown.y;
        console.log("drag", dx, dy);
        set_tile2((t) => {
          return {
            ...t,
            top: t.dragstate.original.y + dy,
            left: t.dragstate.original.x + dx,
          };
        });
      } else {
        console.log("no drag?");
      }
  };

  const stopDragging = () => {
    console.log("stopped");
    set_tile((t) => ({ ...t, dragstate: undefined }));
    set_tile1((t) => ({ ...t, dragstate: undefined }));
    set_tile2((t) => ({ ...t, dragstate: undefined }));
  };

  return (
    <div style={boardStyle} onMouseUp={stopDragging} onMouseMove={onDrag}>
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 30,
          border: "1px solid black",
          ...tile,
        }}
        onMouseDown={startDragging}
      >
        Tile<a href="#">x</a>
      </div>
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 30,
          border: "1px solid black",
          ...tile1,
        }}
        onMouseDown={startDragging1}
      >
        Tile 1
        <a href="#">x</a>
      </div>
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 30,
          border: "1px solid black",
          ...tile2,
        }}
        onMouseDown={startDragging2}
      >
        Tile 2
        <a href="#">x</a>
      </div>
    </div>
  );
}

const boardStyle = {
  position: "relative",
  border: "2px solid black",
  height: 1000,
  width: "100%",
};
