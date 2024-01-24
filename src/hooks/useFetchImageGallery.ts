import { useEffect,  useState } from "react";
import { fetchImagesUrl } from "../utils/contants";
import useAjax from "./useAjax";


const useFetchGallery = (search?: string) => {
  const [page, setPage] = useState<number>(2);
  const [totalPages, setTotalPages] = useState(0);
   const [pageInfo, setPageInfo] = useState({
     next: null,
     prev: null,
   });
  const [url, setUrl] = useState(null);

  const { data, loading, error, setData, setLoading, request, setError } =
    useAjax();

  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => {
        if (search) {
          request(`${fetchImagesUrl}?page=${page}&name=${search}`)
            .then((res: any) => {
              const newData = res;
              setPageInfo((prev) => {
                return { next: newData.info.next, prev: newData.info.prev };
              });
              if (page > 2) {
                setData((prev: any) => {
                  return [...prev, ...newData.results];
                });
              } else {
                setData(newData.results);
              }
              setTotalPages(res?.info?.pages);
            })
            .catch(() => {
              setError(true);
            })
            .finally(() => setLoading(false));
        }
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setLoading(true);
      request(fetchImagesUrl)
        .then((res: any) => {
          setData(res.results);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  }, [page, search, setData, setError, setLoading, request, url, error]);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    page,
    setPage,
    search,
    hasMore: totalPages > page,
    setUrl,
    pageInfo,
  };
};

export default useFetchGallery;
