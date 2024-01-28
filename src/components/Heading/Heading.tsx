import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { description } from "../../utils/contants";
import {styles as headingStyles} from './headingStyles'
const Heading = () => {

    const theme = useTheme();
    const styles = headingStyles(theme);

  return (
    <Box>
      <Typography sx={{ ...styles.text }} align="center" variant="subtitle1" >
       {description}
      </Typography>
    </Box>
  );
};

export default Heading;
