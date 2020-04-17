import React from "react";

export default function GenreItem(props) {
  // console.log("props", props);

  const onMouseDownStartDragging = (event, id) => {
    // call the callback prop passed down from the scoreboard
    props.startDragging(event, id);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: 160,
        height: 30,
        border: "1px solid black",
        ...props.tile,
      }}
      onMouseDown={(event) => onMouseDownStartDragging(event, props.id)}
    >
      {props.tile.name}
    </div>
  );
}
