import React, { useState, useEffect } from "react";

const useRequest = (initialUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(initialUrl);
        if (!response.ok) {
          throw new Error("Not 2xx response");
        }
        const data = await response.json();
        if (!ignore) setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [initialUrl]);
  return { data, isLoading, error };
};

export default useRequest;
