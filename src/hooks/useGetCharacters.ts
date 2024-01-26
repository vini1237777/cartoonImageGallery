
import { useCallback, useState } from "react";
import { getCharacterUrl, request } from "../utils/functions";
import { anyFunction } from "../utils/types";
import useAjax from "./useAjax";

export const useGetCharacters = () => {

    const [next, setNext] = useState('');

    const [search, setSearch] = useState('');
    
    const { data, loading, error, setError, setLoading, setData } = useAjax();
    
    
    const getCharacters = useCallback(
      ({
        pageNum,
        url,
        queryString,
        onSuccess,
        onError,
        onInitial,
        ignorePreviousData,
      }: {
        queryString?: string;
        url?: string;
        pageNum?: number;
        onSuccess?: anyFunction | null;
        onError?: anyFunction | null;
        onInitial?: anyFunction | null;
        ignorePreviousData?: boolean;
      } = {}) => {
        setLoading(true);
        typeof onInitial === "function" && onInitial();
        request(
          getCharacterUrl({
            url,
            page: pageNum || 1,
            queryString: queryString || "",
          })
        )
          .then((res) => {
            if (res?.results?.length) {
              setData((prev) => {
                const previousData = ignorePreviousData ? [] : prev;
                return [...previousData, ...res.results];
              });
              setLoading(false);
              setError(false);
              typeof onSuccess === "function" && onSuccess();
              setNext(res?.info?.next);
            }
          })
          .catch((err) => {
            setData([]);
            setLoading(false);
            setError(true);
            setNext("");
            typeof onError === "function" && onError();
          });
        // eslint-disable-next-line
      },[]
    );


  return {
    data,
    loading,
    error,
    setError,
    setLoading,
    setData,
    setSearch,
    search,
    getCharacters,
    next,
    setNext
  };

}

