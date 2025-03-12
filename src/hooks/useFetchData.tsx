import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const useFetchData = <T,>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const intervalRef = useRef<number | null>(null);
  const cache = useRef<{ [key: string]: T }>({});

  const fetchData = useCallback(async () => {
    if (cache.current[url]) {
      setData(cache.current[url]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result: T = await response.json();
      cache.current[url] = result;

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
    intervalRef.current = window.setInterval(fetchData, 5000); // Обновление каждые 5 секунд
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [fetchData]);

  const memoizedData = useMemo(() => data, [data]);

  return { loading, data: memoizedData };
};

export default useFetchData;
