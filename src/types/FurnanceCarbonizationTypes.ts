export interface Temperatures {
  [key: string]: number;
}

export interface Pressures {
  [key: string]: string;
}

export interface Vacuums {
  [key: string]: string;
}

export interface Gorelka {
  [key: string]: number;
}

export interface FurnanceCarbonizationData {
  temperatures: Temperatures;
  pressures: Pressures;
  vacuums: Vacuums;
  gorelka: Gorelka;
  lastUpdated: string;
}