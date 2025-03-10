export interface SushilkaData {
  temperatures: {
    [key: string]: number;
  };
  vacuums: {
    [key: string]: string;
  };
  gorelka: {
    [key: string]: number;
  };
  im: {
    [key: string]: boolean | number;
  };
  lastUpdated: string;
  __v: number;
}
