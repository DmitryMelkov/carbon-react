import { useState, useEffect, useCallback } from 'react';

const useFetchData = <T, >(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result: T = await response.json();

      // Искусственная задержка в 2 секунды перед обновлением данных
      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 1000); // Задержка 2 секунды
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Обновление каждые 5 секунд
    return () => clearInterval(interval);
  }, [fetchData]);

  return { loading, data };
};

export default useFetchData;