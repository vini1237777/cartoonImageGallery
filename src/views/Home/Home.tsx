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
  const styles= homeStyle(theme);

  
    const {
      data,
      loading,
      error,
      page,
      setPage,
      setSearch,
      search,
      getCharacters,
      next
    } = useGetCharacters();

  const { debouncedValue, previousVal } = useDebounceRef(search, 100);


    const loadMore =()=> {
      getCharacters({
        pageNum:page + 1,
        onSuccess:()=>setPage((prevPage: number) => {
      return prevPage + 1;
    })
      })
      };

    useEffect(() => {
      getCharacters();
    }, [getCharacters]);
  
       useEffect(() => {
         if (debouncedValue || (!debouncedValue && previousVal)) {
           getCharacters({
             pageNum: 1,
             queryString: debouncedValue,
             ignorePreviousData: true,
           });
         }
       }, [debouncedValue, previousVal, getCharacters]);
  

  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={{ ...styles.switch }}>
        <Switch checked={checked} onChange={onChange} />
      </Box>
      <Heading />
      <SearchBar
        searchValue={search}
        onSearch={setSearch}
        placeholder={"Start Typing To See More"}
      />
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
