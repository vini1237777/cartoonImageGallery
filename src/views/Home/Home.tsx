import React from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { Box, Switch, useTheme } from "@mui/material";
import { styles as homeStyle} from "./homeStyles";
import useFetchGallery from "../../hooks/useFetchImageGallery";
import Error from "../../components/Error/Error";
import Heading from "../../components/Heading/Heading";
import { IObject } from "../../utils/types";

const Home = ({checked,onChange}:IObject) => {

  const theme = useTheme();
  const styles= homeStyle(theme);

    const {
      data,
      loading,
      error,
      setPage,
      hasMore,
      search,
      setSearch,
    } = useFetchGallery();

  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={{...styles.switch}}>
      <Switch checked={checked} onChange={onChange} />
      </Box>
      <Heading />
      <SearchBar
        searchValue={search}
        onSearch={setSearch}
        placeholder={"Start Typing To See More"}
      />
      {loading ? (
        <ItemSkeleton count={6} />
      ) : (
        !error && (
          <ItemList
            items={data}
            setPage={setPage}
            hasMore={hasMore}
            search={search}
          />
        )
      )}
      {error && <Error />}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </Box>
  );
};

export default Home;
