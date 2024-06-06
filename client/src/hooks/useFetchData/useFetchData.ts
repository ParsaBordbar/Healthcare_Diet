import { useState, useEffect } from "react";

const useFetchData = <T,>(fetchFunction: (endpoint: string) => Promise<T>, endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction(endpoint);
        setData(result);
      } catch (err: any) {
        if (err.response) {
          setError(err.response.data);
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, endpoint]);

  return { data, error, loading };
};

export default useFetchData;
