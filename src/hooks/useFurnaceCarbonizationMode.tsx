import { useEffect, useState } from 'react';
import { FurnanceCarbonizationData } from '../types/furnanceCarbonizationTypes';

// Кастомный хук для определения режима работы печи
const useFurnaceCarbonizationMode = (data: FurnanceCarbonizationData | null): string | null => {
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
    if (!data || !data.temperatures) {
      setMode(null);
      return;
    }

    const temper1Value = data.temperatures['1-СК'];
    if (temper1Value < 550 && temper1Value > 10) {
      setMode('Выход на режим');
    } else if (temper1Value > 550) {
      setMode('Установившийся режим');
    } else {
      setMode('Печь не работает');
    }
  }, [data]);

  return mode;
};

export default useFurnaceCarbonizationMode;
