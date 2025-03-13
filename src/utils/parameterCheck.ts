import { Recommendation } from '../types/recommendations';

export const checkParameter = (value: number, recommendation: Recommendation, mode?: string) => {
  if (!recommendation || Object.keys(recommendation).length === 0) {
    // console.warn(`No recommendation found for value=${value}`);
    return { isOutOfRange: false, recommendationText: 'Нет рекомендаций' };
  }

  const { min, max } = (() => {
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
  })();

  // Если min и max не определены, считаем, что значение в пределах нормы
  if (min === undefined && max === undefined) {
    return { isOutOfRange: false, recommendationText: 'Нет рекомендаций' };
  }

  const isOutOfRange = (min !== undefined && value < min) || (max !== undefined && value > max);

  const recommendationText = (() => {
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
  })();

  return { isOutOfRange, recommendationText };
};