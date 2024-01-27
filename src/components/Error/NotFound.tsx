import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styles as errorStyles } from "./errorStyles";

const NotFoundError = () => {

  const theme =useTheme();
  const styles= errorStyles(theme);

  return (
    <Box sx={{ ...styles.container }}>
      <Typography
        style={{ ...styles.text }}
        align="center"
      >
        Please try again! No result Found
      </Typography>
    </Box>
  );
};

export default NotFoundError;
