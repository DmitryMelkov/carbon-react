import { FurnanceCarbonizationData } from '../types/furnanceCarbonizationTypes';
import { furnanceCarbonizationsTooltips } from './tooltipTexts';

interface Param {
  keyName: string;
  value: number;
  unit: string;
  tooltipText: string;
  className: string;
}

export const getFurnanceCarbonizationParams = (data: FurnanceCarbonizationData, id: string): Param[] => {
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
    {
      keyName: 'В топке',
      value: data.temperatures['В топке'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara400,
      className: 'temper-v-topke',
    },
    {
      keyName: 'Вверху камеры загрузки',
      value: data.temperatures['Вверху камеры загрузки'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'vverh-kamery-zagruzki',
    },
    {
      keyName: 'Внизу камеры загрузки',
      value: data.temperatures['Внизу камеры загрузки'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'vniz-kamery-zagruzki',
    },
    {
      keyName: 'На входе печи дожига',
      value: data.temperatures['На входе печи дожига'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'vhod-pechi-doziganiy',
    },
    {
      keyName: 'На выходе печи дожига',
      value: data.temperatures['На выходе печи дожига'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'vyhod-pechi-doziganiy',
    },
    {
      keyName: 'Камеры выгрузки',
      value: data.temperatures['Камеры выгрузки'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'temper-kamer-vygruz',
    },
    {
      keyName: 'Дымовых газов котла',
      value: data.temperatures['Дымовых газов котла'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'gazy-kotla-utilizazi',
    },
    {
      keyName: 'Газов до скруббера',
      value: data.temperatures['Газов до скруббера'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.termopara1000,
      className: 'temper-gazov-do-scrubber',
    },
    {
      keyName: 'Газов после скруббера',
      value: data.temperatures['Газов после скруббера'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.tcm50m,
      className: 'temper-gazov-posle-scrubber',
    },
    {
      keyName: 'Воды в ванне скруббера',
      value: data.temperatures['Воды в ванне скруббера'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.tcm50m,
      className: 'temper-vody-v-vanne-scrubber',
    },
    {
      keyName: 'Гранул после холод-ка',
      value: data.temperatures['Гранул после холод-ка'],
      unit: '°C',
      tooltipText: furnanceCarbonizationsTooltips.tcm50m,
      className: 'granul-posle-holodil',
    },
    {
      keyName: 'В ванне скруббера',
      value: data.levels['В ванне скруббера'].value,
      unit: 'мм',
      tooltipText: 'нет информации',
      className: 'uroven-vanne-scrubber',
    },
    {
      keyName: 'В емкости ХВО',
      value: data.levels['В емкости ХВО'].value,
      unit: 'мм',
      tooltipText: 'нет информации',
      className: 'uroven-vody-hvo',
    },
    {
      keyName: 'В барабане котла',
      value: data.levels['В барабане котла'].value,
      unit: 'мм',
      tooltipText: furnanceCarbonizationsTooltips.vBarabaneKotla,
      className: 'uroven-v-barabane-kotla',
    },
    {
      keyName: 'Давление газов после скруббера',
      value: data.pressures['Давление газов после скруббера'],
      unit: 'кгс/см²',
      tooltipText: furnanceCarbonizationsTooltips.davlScrubber,
      className: 'p-gazov-posle-scrubber',
    },
    {
      keyName: 'Пара в барабане котла',
      value: data.pressures['Пара в барабане котла'],
      unit: 'кгс/см²',
      tooltipText: furnanceCarbonizationsTooltips.davlScrubber,
      className: 'p-v-barabane-kotla',
    },
    {
      keyName: 'В топке печи',
      value: data.vacuums['В топке печи'],
      unit: 'кгс/м²',
      tooltipText: furnanceCarbonizationsTooltips.davlTopka,
      className: 'razr-v-topke',
    },
    {
      keyName: 'В котле утилизаторе',
      value: data.vacuums['В котле утилизаторе'],
      unit: 'кгс/м²',
      tooltipText: furnanceCarbonizationsTooltips.davlNizKamery,
      className: 'razr-v-prostranstve-kotla',
    },
    {
      keyName: 'Низ загрузочной камеры',
      value: data.vacuums['Низ загрузочной камеры'],
      unit: 'кгс/м²',
      tooltipText: furnanceCarbonizationsTooltips.davlNizKamery,
      className: 'razr-niz-zagr-kam',
    },
    {
      keyName: 'ИМ5 котел-утилизатор',
      value: typeof data.im['ИМ5 котел-утилизатор'] === 'number' ? data.im['ИМ5 котел-утилизатор'] : 0,
      unit: '%',
      tooltipText: 'нет информации',
      className: 'im5-percent',
    },
    {
      keyName: `Мощность горелки №${id}`,
      value: data.gorelka[`Мощность горелки №${id}`],
      unit: '%',
      tooltipText: 'нет информации',
      className: 'mosh-gorelky',
    },
    {
      keyName: `Задание температуры на горелку №${id}`,
      value: data.gorelka[`Задание температуры на горелку №${id}`],
      unit: '°C',
      tooltipText: 'нет информации',
      className: 'zadanie-temper-na-gorelky',
    },
  ];
};
