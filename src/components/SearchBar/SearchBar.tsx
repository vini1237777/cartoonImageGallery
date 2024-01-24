import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { anyFunction } from "../../utils/types";
import { styles } from "./SearchBarStyles";

interface IProps {
  value: string;
  handleSearch: anyFunction;
}

export const SearchBar = ({ value, handleSearch }: IProps) => (
  <Box sx={{ ...styles }}>
    <TextField
      fullWidth
      label="Search"
      value={value}
      onChange={(e) => handleSearch(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
);
