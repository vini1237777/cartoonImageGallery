import React, { useEffect } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "react-toastify/dist/ReactToastify.css";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { Box, Switch, useTheme } from "@mui/material";
import { styles as homeStyle} from "./homeStyles";
import NotFoundError from "../../components/Error/NotFound";
import Heading from "../../components/Heading/Heading";
import { IObject } from "../../utils/types";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { useDebounceRef } from "../../hooks/useDebounce";

const Home = ({checked,onChange}:IObject) => {
  const theme = useTheme();
  const styles = homeStyle(theme);


  const {
    data,
    loading,
    error,
    setSearch,
    search,
    getCharacters,
    next,
    setData,
    setNext
  } = useGetCharacters();

  const { debouncedValue, previousVal } = useDebounceRef(search, 500);

  const loadMore = () => {
    getCharacters({
      url:next,
      onSuccess: () =>{}
    });
  };
 
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line
  }, []); 

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
      <Box sx={{ ...styles.banner }}>
        <Box sx={{ ...styles.switch }}>
          <Switch checked={checked} onChange={onChange} />
        </Box>
        <Heading />
        <SearchBar
          searchValue={search}
          onSearch={setSearch}
          placeholder={"Start Typing To See More"}
        />
      </Box>

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
      {error && <NotFoundError />}
    </Box>
  );
};

export default Home;
