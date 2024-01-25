import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { description } from "../../utils/contants";
import {styles as headingStyles} from './headingStyles'
const Heading = () => {

    const theme = useTheme();
    const styles = headingStyles(theme);

  return (
    <Box sx={{ ...styles.container }}>
      <Typography sx={{ ...styles.text }} align="center">
        {description}
      </Typography>
    </Box>
  );
};

export default Heading;
