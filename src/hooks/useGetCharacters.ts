import { useCallback, useState } from "react";
import { getCharacterUrl, request } from "../utils/functions";
import { anyFunction } from "../utils/types";
import useAjax from "./useAjax";

// custom hook to fetch character data with search and pagination functionality.
export const useGetCharacters = () => {
  // state to manage the URL for the next set of data.
  const [next, setNext] = useState("");

  // state to manage search input.
  const [search, setSearch] = useState("");

  // using the custom useAjax hook for handling AJAX states.
  const { data, loading, error, setError, setLoading, setData } = useAjax();

  // using function to fetch character data, wrapped in useCallback to avoid unnecessary re-renders.
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
    },
    // eslint-disable-next-line
    []
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
    setNext,
  };
};
