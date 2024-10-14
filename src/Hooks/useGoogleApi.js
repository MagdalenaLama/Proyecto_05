import { useState, useEffect } from "react";
import { fetchGoogleApi } from "../services/fetchGoogleApi";

export const useGoogleApi = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params) {
      return;
    }

    const getData = async () => {
      setLoading(true);
      try {
        const datos = await fetchGoogleApi(params);
        setData(datos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [params]);

  return { data, loading, error };
};
