import React from "react";
import { motion } from "framer-motion";
import GenreTile from "../../components/GenreTile";

export default function GenreItem(props) {
  const { tile, setTile } = props;

  const onMouseDownStartDragging = (event, id) => {
    props.startDragging(event, id);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
        cursor: "grabbing",
      }}
      whileTap={{
        transition: { duration: 0.2 },
        cursor: "grabbing",
      }}
      style={{
        position: "absolute",
        height: 30,
        textAlign: "center",
        backgroundColor: "rgb(255, 255, 255)",
        lineHeight: "30px",
        ...props.tile,
      }}
      onMouseDown={(event) => onMouseDownStartDragging(event, props.id)}
    >
      <GenreTile
        onMouseDownStartDragging={onMouseDownStartDragging}
        tile={tile}
        setTile={setTile}
      />
    </motion.div>
  );
}
