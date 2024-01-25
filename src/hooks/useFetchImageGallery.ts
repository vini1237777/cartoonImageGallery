import { useState, useEffect, useCallback } from "react";
import { fetchImagesUrl } from "../utils/contants";
import useAjax from "./useAjax";
import { useDebounceRef } from "./useDebounce";

const useFetchGallery = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const { data, loading, error, setData, setLoading, request, setError } =
    useAjax();

  const debouncedSearch = useDebounceRef(search, 100);
        
  useEffect(() => {
  let fetchData: any;
        if (search && debouncedSearch) {
          fetchData = async () => {
            setLoading(true);
            const query = debouncedSearch ? `&name=${debouncedSearch}` : "";
            const url = `${fetchImagesUrl}?page=${page}${query}`;
            try {
              const res = await request(url);
              const newData: any[] = res.results;
              if (page > 1) {
                setData((prev) => {
                  return [...prev, ...newData];
                });
              } else {
                setData(newData);
              }
              setTotalPages(res.info.pages);
            } catch (err) {
              setError(true);
            } finally {
              setLoading(false);
            }
          };
        } else {
          fetchData = async () => {
            setLoading(true);
            request(fetchImagesUrl)
              .then((res) => {
                setData(res.results);
              })
              .catch(() => {
                setError(true);
              })
              .finally(() => setLoading(false));
          };
        }

      fetchData();
    }, [page, debouncedSearch, request,search, setData, setError, setLoading]);

  return {
    page,
    data,
    loading,
    error,
    setPage,
    hasMore: page < totalPages,
    search,
    setSearch,
  };
};

export default useFetchGallery;
