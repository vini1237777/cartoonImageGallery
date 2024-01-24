import { useEffect,  useRef,  useState } from "react";
import { fetchImagesUrl } from "../utils/contants";
import { getPageNumberFromUrl } from "../utils/functions";
import useAjax from "./useAjax";


const useFetchGallery = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
   const [pageInfo, setPageInfo] = useState({
     next: null,
     prev: null,
   });
  const [url, setUrl] = useState(null);
const [search, setSearch] = useState("");

  const { data, loading, error, setData, setLoading, request, setError } =
    useAjax();

const inputRef : any = useRef();


  useEffect(() => {
    console.log(search, inputRef?.current?.value);
    if (search) {

      if (page > 2) {
        const timer = setTimeout(() => {
          if (search === inputRef?.current?.value) {
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
        }, 600);
        return () => {
          clearTimeout(timer);
        };
      } else if (page < 3) {
        setLoading(true);
        request(`${fetchImagesUrl}?name=${search}`)
          .then((res: any) => {
            setData(res.results);
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => setLoading(false));
      }
     
    } else {
      setLoading(true);
      request(fetchImagesUrl)
        .then((res: any) => {
          setData(res.results);
          const currentPage = getPageNumberFromUrl(res.info.next);
          setPage(Number(currentPage));
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  }, [
    page,
    search,
    setData,
    setError,
    setLoading,
    request,
    url,
    error,
    setSearch
  ]);

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
    inputRef,
    setSearch,
  };
};

export default useFetchGallery;
