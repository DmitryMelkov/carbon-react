import { Recommendation } from '../types/recommendations';
import {
  recommendedLevels,
  recommendedPressures,
  recommendedTemperatures,
  recommendedVacuums,
} from './furnanceCarbonizationRecomendedValues';

export const getRecommendation = (key: string, unit?: string): { recommendation: Recommendation; unit: string } => {
  let recommendation = {};
  let recommendationUnit = unit || '';

  if (recommendedTemperatures[key]) {
    recommendation = recommendedTemperatures[key];
    recommendationUnit = recommendedTemperatures[key].unit || '°C';
  } else if (recommendedLevels[key]) {
    recommendation = recommendedLevels[key];
    recommendationUnit = recommendedLevels[key].unit || 'мм';
  } else if (recommendedPressures[key]) {
    recommendation = recommendedPressures[key];
    recommendationUnit = recommendedPressures[key].unit || 'кПа';
  } else if (recommendedVacuums[key]) {
    recommendation = recommendedVacuums[key];
    recommendationUnit = recommendedVacuums[key].unit || 'кПа';
  }

  // console.log(`Recommendation for ${key} (${recommendationUnit}):`, recommendation);
  return { recommendation, unit: recommendationUnit };
};
