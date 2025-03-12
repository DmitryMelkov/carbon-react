// hooks/useCheckParameter.ts
import { useEffect, useState } from 'react';
import { Recommendation } from '../types/Recommendations';

export const useCheckParameter = (
  value: number,
  recommendation: Recommendation,
  mode?: string
): boolean => {
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  useEffect(() => {
    let min: number | undefined;
    let max: number | undefined;

    if (mode && recommendation.modes?.[mode]) {
      // Если есть режим и для него заданы значения
      min = recommendation.modes[mode].min;
      max = recommendation.modes[mode].max;
    } else {
      // Используем общие значения
      min = recommendation.min;
      max = recommendation.max;
    }

    setIsOutOfRange(
      (min !== undefined && value < min) || (max !== undefined && value > max)
    );
  }, [value, recommendation, mode]);

  return isOutOfRange;
};