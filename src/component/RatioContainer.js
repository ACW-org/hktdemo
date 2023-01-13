import React from "react";
import Box from "@mui/material/Box";

const RatioContainer = ({ ratio, children, ...props }) => (
  <Box position="relative" pt={`${(1 / ratio) * 100}%`} {...props}>
    <Box position="absolute" top={0} left={0} width={1} height={1}>
      {children}
    </Box>
  </Box>
);

export default RatioContainer;
