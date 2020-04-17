import React from "react";

export default function GenreCard(props) {
  console.log("props", props);
  
  const startDraggingHandler = (e, id) => {
    // console.log("from the card hendler", e, id);
    // props.startDragging(props.id);
  };

  return (
    <div
    // id={props.id}
    // style={{
    //   position: "absolute",
    //   width: 160,
    //   height: 30,
    //   border: "1px solid black",
    //   // ...tile
    // }}
    //   onMouseDown={(event) => startDraggingHandler(event, props.id)}
    >
      {/* {props.name}<a href="#">Link</a> */}
    </div>
  );
}
