import { useState} from "react";

const useAjax = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  return { data, loading, error, setData, setLoading ,setError};
};
export default useAjax;
