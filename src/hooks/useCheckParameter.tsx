import { useMemo } from 'react';
import { Recommendation } from '../types/recommendations';

export const useParameterCheck = (value: number, recommendation: Recommendation, mode?: string) => {
  const { min, max } = useMemo(() => {
    if (mode && recommendation.modes?.[mode]) {
      return {
        min: recommendation.modes[mode].min,
        max: recommendation.modes[mode].max,
      };
    }
    return {
      min: recommendation.min,
      max: recommendation.max,
    };
  }, [recommendation, mode]);

  const isOutOfRange = useMemo(() => {
    return (min !== undefined && value < min) || (max !== undefined && value > max);
  }, [value, min, max]);

  const recommendationText = useMemo(() => {
    if (recommendation.modes) {
      return Object.entries(recommendation.modes)
        .map(([mode, { min, max }]) => {
          const parts = [];
          if (min !== undefined) parts.push(`не менее ${min}`);
          if (max !== undefined) parts.push(`не более ${max}`);
          return `${mode}: ${parts.join(', ')}`;
        })
        .join('\n');
    }

    const parts = [];
    if (recommendation.min !== undefined) parts.push(`не менее ${recommendation.min}`);
    if (recommendation.max !== undefined) parts.push(`не более ${recommendation.max}`);
    return parts.join(' и ');
  }, [recommendation]);

  return { isOutOfRange, recommendationText };
};