import React from "react";
import { Typography } from "@mui/material";
import { rem } from "../../utils/functions";

const Error = () => {
  return (
    <Typography style={{ backgroundColor: "#F8F8FF", marginTop:rem(10) }}>
      Please try again! No result Found
    </Typography>
  );
};

export default Error;
