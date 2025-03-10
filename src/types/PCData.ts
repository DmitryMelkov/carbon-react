export interface PCData {
  temperatures: {
    [key: string]: number;
  };
  levels: {
    [key: string]: {
      value: number;
      percent: number;
    };
  };
  pressures: {
    [key: string]: string;
  };
  vacuums: {
    [key: string]: string;
  };
  im: {
    [key: string]: boolean | number;
  };
  gorelka: {
    [key: string]: number;
  };
  lastUpdated: string;
  __v: number;
}