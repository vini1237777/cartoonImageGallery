import React, { useEffect } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "react-toastify/dist/ReactToastify.css";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { Box, Switch, useTheme } from "@mui/material";
import { styles as homeStyle } from "./homeStyles";
import NotFoundError from "../../components/Error/NotFound";
import Heading from "../../components/Heading/Heading";
import { IObject } from "../../utils/types";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { useDebounceRef } from "../../hooks/useDebounce";

const Home = ({ checked, onChange }: IObject) => {
  // Using the Material-UI theme for styling.
  const theme = useTheme();
  const styles = homeStyle(theme);

  // Extracting necessary functions and states from our custom hook.
  const {
    data,
    loading,
    error,
    setSearch,
    search,
    getCharacters,
    next,
    setData,
    setNext,
  } = useGetCharacters();

  // Custom debouncing for handling rapid search inputs.
  const { debouncedValue, previousVal } = useDebounceRef(search, 500);

  // Function to load more items.
  const loadMore = () => {
    getCharacters({
      url: next,
      onSuccess: () => {},
    });
  };

  // Initial data fetching on component mount.
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line
  }, []);

  // Effect for handling search functionality.
  useEffect(() => {
    if (debouncedValue || (!debouncedValue && previousVal.current)) {
      getCharacters({
        pageNum: 1,
        queryString: debouncedValue,
        ignorePreviousData: true,
        onInitial: () => {
          setData([]);
          setNext("");
        },
      });
    } // eslint-disable-next-line
  }, [debouncedValue, getCharacters, previousVal]);

  // Rendering the Home component UI.
  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={{ ...styles.banner }}>
        <Box sx={{ ...styles.switch }}>
          {/* Button for changing theme of the component (light and dark) */}
          <Switch checked={checked} onChange={onChange} />
        </Box>
        <Heading />
        <SearchBar
          searchValue={search}
          onSearch={setSearch}
          placeholder={"Start Typing To See More"}
        />
      </Box>

      {error && (
        <Box sx={{...styles.errorWrapper}}>
          <NotFoundError />
        </Box>
      )}
      {/* Conditional rendering based on loading and error states. */}
      {loading && !data.length ? (
        <ItemSkeleton count={6} />
      ) : (
        !error && (
          <ItemList
            items={data}
            loadMore={loadMore}
            hasMore={!!next}
            search={search}
          />
        )
      )}
    </Box>
  );
};

export default Home;
