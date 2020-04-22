import React from "react";

export default function RelationLine({ line }) {
  return (
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
  );
}
