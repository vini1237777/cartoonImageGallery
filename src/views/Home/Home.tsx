import React, { useEffect } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "react-toastify/dist/ReactToastify.css";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { Box,  useTheme } from "@mui/material";
import { styles as homeStyle } from "./homeStyles";
import NotFoundError from "../../components/Error/NotFound";
import { IObject } from "../../utils/types";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { useDebounceRef } from "../../hooks/useDebounce";
import SearchAppBar from "../../AppBar/AppBar";

const Home = ({ isDarkMode, onThemeChange }: IObject) => {
  // using the Material-UI theme for styling.
  const theme = useTheme();
  const styles = homeStyle(theme);

  // getting necessary functions and states from our custom hook.
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

  // using custom debouncing for handling search inputs.
  const { debouncedValue, previousVal } = useDebounceRef(search, 500);

  // function to load more items while scrolling.
  const loadMore = () => {
    getCharacters({
      url: next,
      onSuccess: () => {},
    });
  };

  // initial data fetching on component mount.
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line
  }, []);

  // useEffect for handling search functionality.
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

  return (
    <Box sx={{ ...styles.container }}>
      <SearchAppBar isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
      <SearchBar
        searchValue={search}
        onSearch={setSearch}
        placeholder={"Search For Character Name"}
      />

      {error && !loading && <NotFoundError />}

      {loading && !data.length ? (
        <ItemSkeleton count={10} />
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
