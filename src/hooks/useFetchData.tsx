import { useState, useEffect, useCallback } from 'react';

export function useFetchData<T>(url: string): { loading: boolean; data: T | null; error: boolean } {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      // const response = await fetch(`http://169.254.0.156:3002/api/${url}`);
      const response = await fetch(`http://localhost:3002/api/${url}`);

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setLoading(false);
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { loading, data, error };
}