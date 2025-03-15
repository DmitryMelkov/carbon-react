export interface Temperatures {
  [key: string]: number;
}

export interface Vacuums {
  [key: string]: number;
}

export interface Gorelka {
  [key: string]: number;
}

export interface Im {
  [key: string]: boolean | number;
}

export interface DryerData {
  temperatures: Temperatures;
  vacuums: Vacuums;
  gorelka: Gorelka;
  im: Im;
  lastUpdated: string;
}