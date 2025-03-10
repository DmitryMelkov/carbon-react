export interface Temperatures {
  [key: string]: number;
}

export interface Vacuums {
  [key: string]: string;
}

export interface Gorelka {
  [key: string]: number;
}

export interface Im {
  "Индикация паротушения": boolean;
  "Индикация сбрасыватель": boolean;
}

export interface DryerData {
  temperatures: Temperatures;
  vacuums: Vacuums;
  gorelka: Gorelka;
  im: Im;
  lastUpdated: string;
}