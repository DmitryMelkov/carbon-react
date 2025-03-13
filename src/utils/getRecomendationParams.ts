import { recommendedLevels, recommendedPressures, recommendedTemperatures, recommendedVacuums } from "./furnanceCarbonizationRecomendedValues";


export const getRecommendation = (key: string, unit: string) => {
  if (unit === '°C') {
    return recommendedTemperatures[key] || {};
  } else if (unit === 'мм') {
    return recommendedLevels[key] || {};
  } else if (unit === 'кгс/см²') {
    return recommendedPressures[key] || {};
  } else if (unit === 'кгс/м²') {
    return recommendedVacuums[key] || {};
  }
  return {};
};