import React from "react";
import { Typography } from "@mui/material";
import { rem } from "../../utils/functions";

const Description = () => {
  return (
    <Typography
      style={{
        fontFamily: "'Bubblegum Sans', cursive", 
        fontSize: "40px", 
        marginBottom:rem(20),
        fontWeight: "bold"
      }}
      align="center"
    >
      The cartoon gallery
    </Typography>
  );
};

export default Description;
