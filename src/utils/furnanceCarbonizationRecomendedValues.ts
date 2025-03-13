import { Recommendations } from "../types/recommendations";

export const recommendedTemperatures: Recommendations = {
  '1-СК': { min: 550, max: 800 },
  '2-СК': { max: 700 },
  '3-СК': {
    modes: {
      'Установившийся режим': { max: 400 },
      'Выход на режим': { max: 750 },
    },
  },
  'В топке': { max: 1000 },
  'Вверху камеры загрузки': { max: 1000 },
  'Внизу камеры загрузки': { min: 1000, max: 1100 },
  'На входе печи дожига': { max: 1200 },
  'На выходе печи дожига': { max: 1200 },
  'Камеры выгрузки': { max: 750 },
  'Дымовых газов котла': { max: 1100 },
  'Газов до скруббера': { max: 400 },
  'Газов после скруббера': { max: 100 },
  'Воды в ванне скруббера': { max: 90 },
  'Гранул после холод-ка': { max: 70 },
};

export const recommendedLevels: Recommendations = {
  'В ванне скруббера': { min: 250, max: 1000 },
  'В барабане котла': { min: -100, max: 100 },
  'В емкости ХВО': { min: 1500, max: 6000 },
};

export const recommendedPressures: Recommendations = {
  'Давление газов после скруббера': { max: 20 },
};

export const recommendedVacuums: Recommendations = {
  'В топке печи': { min: -4.0, max: -1.0 },
  'В котле утилизаторе': { min: -12.0, max: -3.0 },
  'Низ загрузочной камеры': { min: -5.0, max: -1.0 },
};
