import { Recommendations } from "../types/recommendations";


// Рекомендации для температур
export const recommendedTemperatures: Recommendations = {
  '1-СК': { min: 550, max: 800, unit: '°C' },
  '2-СК': { max: 700, unit: '°C' },
  '3-СК': {
    modes: {
      'Установившийся режим': { max: 400, unit: '°C' },
      'Выход на режим': { max: 750, unit: '°C' },
    },
    unit: '°C',
  },
  'В топке': { max: 1000, unit: '°C' },
  'Вверху камеры загрузки': { max: 1000, unit: '°C' },
  'Внизу камеры загрузки': { min: 1000, max: 1100, unit: '°C' },
  'На входе печи дожига': { max: 1200, unit: '°C' },
  'На выходе печи дожига': { max: 1200, unit: '°C' },
  'Камеры выгрузки': { max: 750, unit: '°C' },
  'Дымовых газов котла': { max: 1100, unit: '°C' },
  'Газов до скруббера': { max: 400, unit: '°C' },
  'Газов после скруббера': { max: 100, unit: '°C' },
  'Воды в ванне скруббера': { max: 90, unit: '°C' },
  'Гранул после холод-ка': { max: 70, unit: '°C' },
};

// Рекомендации для уровней
export const recommendedLevels: Recommendations = {
  'В ванне скруббера': { min: 250, max: 1000, unit: 'мм' },
  'В барабане котла': { min: -100, max: 100, unit: 'мм' },
  'В емкости ХВО': { min: 1500, max: 6000, unit: 'мм' },
};

// Рекомендации для давлений
export const recommendedPressures: Recommendations = {
  'Давление газов после скруббера': { max: 20, unit: 'кгс/м2' },
};

// Рекомендации для разрежений
export const recommendedVacuums: Recommendations = {
  'В топке печи': { min: -4.0, max: -1.0, unit: 'кгс/cм2' },
  'В котле утилизаторе': { min: -12.0, max: -3.0, unit: 'кгс/cм2' },
  'Низ загрузочной камеры': { min: -5.0, max: -1.0, unit: 'кгс/cм2' },
};