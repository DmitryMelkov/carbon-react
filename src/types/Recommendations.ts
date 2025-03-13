export interface Recommendation {
  min?: number; // Минимальное значение
  max?: number; // Максимальное значение
  unit?: string; // Единица измерения
  modes?: {
    [mode: string]: Recommendation; // Режимы работы (опционально)
  };
}

// Тип Recommendations остается без изменений
export type Recommendations = Record<string, Recommendation>;