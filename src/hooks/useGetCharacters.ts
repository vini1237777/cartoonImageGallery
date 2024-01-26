import { useCallback, useState } from "react";
import { getCharacterUrl, request } from "../utils/functions";
import { anyFunction } from "../utils/types";
import useAjax from "./useAjax";
import useSearchAndPagination from "./useSearchAndPagination";

export const useGetCharacters = () => {

    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');

  const { data, loading, error, setError, setLoading, setData } = useAjax();

  const {
    page,
    setPage,
    setSearch,
    search,
  } = useSearchAndPagination();

    const getCharacters = useCallback(
      ({
        pageNum,
        queryString,
        onSuccess,
        onError,
        ignorePreviousData,
      }: {
        queryString?: string;
        pageNum?: number;
        onSuccess?: anyFunction | null;
        onError?: anyFunction | null;
        ignorePreviousData?: boolean;
      } = {}) => {
        setLoading(true);
        request(
          getCharacterUrl({
            page: pageNum || 1,
            queryString: queryString || "",
          })
        )
          .then((res) => {
            if (res?.results?.length) {
                setData((prev) => {
                  const previousData = ignorePreviousData ? []: prev;
                return [...previousData, ...res.results];
              });
              setLoading(false);
              setError(false);
              typeof onSuccess === "function" && onSuccess();
              if (res?.info?.next) {
                setNext(res?.info?.next);
                setNext(res?.info?.prev);
              }
            }
          })
          .catch((err) => {
            setData([]);
            setLoading(false);
            setError(true);
            typeof onError === "function" && onError();
          });
      },
      [setData, setError,setLoading]
    );


  return {
    data,
    loading,
    error,
    setError,
    setLoading,
    setData,
    page,
    setPage,
    setSearch,
    search,
    getCharacters,
    next,
    prev
  };

}

