export interface Recommendation {
  min?: number;
  max?: number;
  modes?: {
    [mode: string]: Recommendation;
  };
}

export type Recommendations = Record<string, Recommendation>;