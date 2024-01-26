import React from "react";
import { Box, TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { anyFunction } from "../../utils/types";
import { styles } from "./SearchBarStyles";
import { themes } from "../../utils/contants";

interface IProps {
  searchValue: string;
  onSearch: anyFunction;
  placeholder: string;
}


export const SearchBar = ({ searchValue, onSearch, placeholder }: IProps) => {


    const theme = useTheme();
    const isDarkMode = theme.palette.mode === themes.dark;

return (
  <Box
    sx={{ ...styles.container, ...(isDarkMode ? styles.container_dark : "") }}
  >
    <TextField
      hiddenLabel
      fullWidth
      sx={{ ...styles.textfield, ...(isDarkMode ? styles.textfield_dark : "") }}
      label={placeholder}
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

}


export default SearchBar;
