import { useState } from "react";

const useSearchAndPagination = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  return {
    page,
    setPage,
    setSearch,
    search,
  };

}

export default useSearchAndPagination
