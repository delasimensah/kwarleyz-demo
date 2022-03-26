import React from "react";

// mantine
import { Box } from "@mantine/core";

const Overlay = () => {
  return (
    <Box
      className="absolute top-0 left-0 h-full w-full bg-black/10"
      sx={{
        zIndex: 1000,
      }}
    />
  );
};

export default Overlay;
