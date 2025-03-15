export interface Temperatures {
  [key: string]: number;
}

export interface Pressures {
  [key: string]: number;
}

export interface FurnanceActivationData {
  temperatures: Temperatures;
  pressures: Pressures;
  lastUpdated: string;
}
