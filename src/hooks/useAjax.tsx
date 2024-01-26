import { useState } from "react";

// Custom hook for managing AJAX requests.
const useAjax = () => {
  // State for storing response data.
  const [data, setData] = useState<any[]>([]);

  // State to track loading status.
  const [loading, setLoading] = useState(false);

  // State to track if there's an error.
  const [error, setError] = useState(false);

  // Returning states and their setters for external use.
  return { data, loading, error, setData, setLoading, setError };
};

export default useAjax;
