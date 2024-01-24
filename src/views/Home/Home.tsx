import React, {  useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { Box } from "@mui/material";
import { styles } from "./homeStyles";
import { getPageNumberFromUrl } from "../../utils/functions";
import useFetchGallery from "../../hooks/useFetchImageGallery";
import Error from "../../components/Error/Error";
import Description from "../../components/Description/Description";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");


    const {
      data,
      loading,
      error,
      pageInfo: { next },
      setUrl,
      setPage,
      hasMore,
    } = useFetchGallery(searchTerm);


 
  const handleSearch = (searchedText: string) => {
     setSearchTerm(searchedText);
   };

   const fetchMoreData = () => {
    if (next){
    const page = getPageNumberFromUrl(next);
    const currentPage = Number(page);
    setPage(currentPage)
    setUrl(next);
    }
   };


  return (
    <Box sx={{ ...styles }}>
      <Description/>
      <SearchBar value={searchTerm} handleSearch={handleSearch} />
      {loading ? (
        <ItemSkeleton count={10} />
      ) : (
        !error && (
          <ItemList items={data} fetchData={fetchMoreData} hasMore={hasMore} />
        )
      )}
    {error  && <Error />}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </Box>
  );
};

export default Home;
