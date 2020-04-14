import React from "react";

export default function GenreCard(props) {

  const startDraggingHandler = (e) => {
    props.startDragging(props.id);
  };

  const tileId = props.id === 1 ? props.value : null;
  const tileId1 = props.id === 2 ? props.value1 : null;
  const tileId2 = props.id === 3 ? props.value2 : null;

  return (
    <div
      id={props.id}
      style={{
        position: "absolute",
        width: 160,
        height: 30,
        border: "1px solid black",
        ...tileId,
        ...tileId1, 
        ...tileId2
      }}
        onMouseDown={() => startDraggingHandler(props.id)}
    >
      {props.name}
      <a href="#">x</a>
    </div>
  );
}
