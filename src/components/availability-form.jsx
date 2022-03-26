import React from "react";

// mantine
import { Box } from "@mantine/core";

const AvailabilityForm = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 40,
        left: 0,
        width: "100vw",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%", color: "white", border: "1px solid white" }}>
        Content
      </Box>
    </Box>
  );
};

export default AvailabilityForm;
