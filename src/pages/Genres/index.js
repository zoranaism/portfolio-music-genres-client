import React from "react";
import DraggingBoard from "./DraggingBoard";

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
          }}
        >
          <DraggingBoard />
        </Box>
      </Container>
    </div>
  );
}
