import React from "react";
import { Box, Typography } from "@mui/material";
import { rem } from "../../utils/functions";
import { styles } from "./errorStyles";

const NotFoundError = () => {

  return (
    <Box sx={{ ...styles.container }}>
      <Typography
        style={{ ...styles.text, marginTop: rem(10), color: "black" }}
      >
        Please try again! No result Found
      </Typography>
    </Box>
  );
};

export default NotFoundError;
