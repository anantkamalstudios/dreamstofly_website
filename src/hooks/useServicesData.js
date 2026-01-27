import { useState, useEffect, useCallback } from "react";
import { apiGet } from "../api/config";

export const useServicesData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiGet(`${endpoint}`);
      console.log(response);

      if (response?.data) {
        setData(response.data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError(err.message || `Failed to fetch data from ${endpoint}`);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
