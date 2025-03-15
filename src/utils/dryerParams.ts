import { DryerData } from '../types/dryerDataTypes';
import { sushilkaTooltips } from './tooltipTexts';

interface Param {
  keyName: string;
  value: number;
  unit: string;
  tooltipText: string;
  className: string;
}

export const getDryersParams = (data: DryerData, id: string): Param[] => {
  return [
    {
      keyName: 'Температура в камере смешения',
      value: data.temperatures['Температура в камере смешения'],
      unit: '°C',
      tooltipText: sushilkaTooltips.kameraSmeshenia,
      className: 'kamera-smeshenia',
    },
    {
      keyName: 'Температура в топке',
      value: data.temperatures['Температура в топке'],
      unit: '°C',
      tooltipText: sushilkaTooltips.topkaTemper,
      className: 'topka-temper',
    },
    {
      keyName: 'Разрежение в топке',
      value: data.vacuums['Разрежение в топке'],
      unit: 'кг/см²',
      tooltipText: sushilkaTooltips.topkaDavl,
      className: 'topka-davl',
    },
    {
      keyName: `Мощность горелки №${id}`,
      value: data.gorelka[`Мощность горелки №${id}`],
      unit: '%',
      tooltipText: 'нет информации',
      className: 'mosh-gorelky',
    },
    {
      keyName: `Задание температуры №${id}`,
      value: data.gorelka[`Задание температуры №${id}`],
      unit: '°C',
      tooltipText: 'нет информации',
      className: 'zadanie-temper',
    },
    {
      keyName: 'Разрежение воздуха на разбавление',
      value: data.vacuums['Разрежение воздуха на разбавление'],
      unit: 'кг/см²',
      tooltipText: sushilkaTooltips.vosduhNaRazbavl,
      className: 'vosduh-na-razbavl',
    },
    {
      keyName: 'Разрежение в камере выгрузки',
      value: data.vacuums['Разрежение в камере выгрузки'],
      unit: 'кг/см²',
      tooltipText: sushilkaTooltips.kameraVigruzki,
      className: 'kamera-vigruzki',
    },
    {
      keyName: 'Температура уходящих газов',
      value: data.temperatures['Температура уходящих газов'],
      unit: '°C',
      tooltipText: sushilkaTooltips.temperUhodyashihGazov,
      className: 'temper-uhodyashih-gazov',
    },
  ];
};
