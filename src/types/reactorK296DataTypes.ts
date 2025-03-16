export interface Temperatures {
  [key: string]: number;
}

export interface Levels {
  [key: string]: number;
}

export interface ReactorK296Data {
  temperatures: Temperatures;
  levels: Levels;
}