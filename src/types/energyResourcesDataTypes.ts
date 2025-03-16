export interface EnergyResourceData {
  [deviceId: string]: {
    device: string;
    data: {
      [key: string]: number;
    };
    lastUpdated: string;
    outdated: boolean;
  };
}
