import React from "react";
import DraggingBoard from "./DraggingBoard";
import NewGenreForm from "./NewGenreForm";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Genres() {
  return (
    <div>
      <Container maxWidth={false}>
        <Box
          my={4}
          style={{
            padding: "5px",
            backgroundColor: "#cdd3f5",
            borderRadius: "20px",
            backgroundImage: "radial-gradient(rgb(217, 222, 247), #dfe5f1)"
          }}
        >
          <DraggingBoard />
          <NewGenreForm />
        </Box>
      </Container>
    </div>
  );
}
