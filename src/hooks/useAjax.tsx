import { useState } from "react";

// custom hook for managing AJAX requests.
const useAjax = () => {
  // state for storing response data.
  const [data, setData] = useState<any[]>([]);

  // state to keep track of loading status.
  const [loading, setLoading] = useState(false);

  // state to keep track if there's an error.
  const [error, setError] = useState(false);

  // returning states and their setters.
  return { data, loading, error, setData, setLoading, setError };
};

export default useAjax;
