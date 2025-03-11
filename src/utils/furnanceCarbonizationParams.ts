import { FurnanceCarbonizationData } from '../types/FurnanceCarbonizationTypes';
import { furnanceCarbonizationsTooltips } from './tooltipTexts';

interface Param {
  keyName: string;
  value: number;
  unit: string;
  tooltipText: string;
  className: string;
}

export const getFurnanceCarbonizationParams = (data: FurnanceCarbonizationData): Param[] => {
  return [
    {
      keyName: '1-СК',
      value: data.temperatures['1-СК'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara400,
      className: 'first-skolz',
    },
    {
      keyName: '2-СК',
      value: data.temperatures['2-СК'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara400,
      className: 'second-skolz',
    },
    {
      keyName: '3-СК',
      value: data.temperatures['3-СК'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara400,
      className: 'third-skolz',
    },
  ];
};