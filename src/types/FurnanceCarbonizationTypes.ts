export interface Temperatures {
  [key: string]: number;
}

export interface Pressures {
  [key: string]: number;
}

export interface Vacuums {
  [key: string]: number;
}

export interface Gorelka {
  [key: string]: number;
}

export interface Levels {
  [key: string]: {
    value: number;
    percent: number;
  };
}

export interface IM {
  [key: string]: boolean | number;
}

export interface FurnanceCarbonizationData {
  temperatures: Temperatures;
  pressures: Pressures;
  vacuums: Vacuums;
  gorelka: Gorelka;
  levels: Levels;
  im: IM;
  lastUpdated: string;
}

export const transformLevels = (levels: Levels): Record<string, string> => {
  return Object.entries(levels).reduce((acc, [key, value]) => {
    acc[key] = `${value.value}мм/${value.percent}%`;
    return acc;
  }, {} as Record<string, string>);
};

export const transformIM = (im: IM): Record<string, string> => {
  return Object.entries(im).reduce((acc, [key, value]) => {
    acc[key] = value.toString();
    return acc;
  }, {} as Record<string, string>);
};