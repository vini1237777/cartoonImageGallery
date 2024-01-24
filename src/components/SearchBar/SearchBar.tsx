import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { anyFunction } from "../../utils/types";
import { styles } from "./SearchBarStyles";

interface IProps {
  searchValue: string;
  onSearch: anyFunction;
}

export const SearchBar = React.forwardRef(({ searchValue, onSearch }: IProps, ref) => (
  <Box sx={{ ...styles }}>
    <TextField
      fullWidth
      label="Search"
      inputRef={ref}
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
));
