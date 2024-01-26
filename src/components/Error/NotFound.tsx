import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { rem } from "../../utils/functions";
import { styles as errorStyles } from "./errorStyles";

const NotFoundError = () => {

  const theme =useTheme();
  const styles= errorStyles(theme);

  return (
    <Box sx={{ ...styles.container }}>
      <Typography
        style={{ ...styles.text, marginTop: rem(10), color: "black" }}
        align="center"
      >
        Please try again! No result Found
      </Typography>
    </Box>
  );
};

export default NotFoundError;
