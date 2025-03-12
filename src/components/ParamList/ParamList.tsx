import React from 'react';
import ParamIndicator from '../ParamIndicator/ParamIndicator';
import styles from '../FurnanceCarbonization/mnemo/FurnanceCarbonizationMnemo.module.scss';
import {
  recommendedLevels,
  recommendedPressures,
  recommendedTemperatures,
  recommendedVacuums,
} from '../../utils/furnanceCarbonizationRecomendedValues';

interface Param {
  keyName: string;
  value: number;
  unit: string;
  tooltipText: string;
  className: string;
}

interface ParamListProps {
  params: Param[];
  tooltipsEnabled: boolean;
  furnaceMode?: string; // Добавляем режим работы печи
}

const ParamList: React.FC<ParamListProps> = ({ params, tooltipsEnabled, furnaceMode }) => {
  return (
    <>
      {params.map((param) => {
        let recommendation = {};
        if (param.unit === '°C') {
          recommendation = recommendedTemperatures[param.keyName] || {};
        } else if (param.unit === 'мм') {
          recommendation = recommendedLevels[param.keyName] || {};
        } else if (param.unit === 'кгс/см²') {
          recommendation = recommendedPressures[param.keyName] || {};
        } else if (param.unit === 'кгс/м²') {
          recommendation = recommendedVacuums[param.keyName] || {};
        }

        return (
          <div
            className={`${styles['mnemo__param']} ${styles[param.className]} ${
              tooltipsEnabled ? '' : styles['no-hover']
            }`}
            key={param.keyName}
          >
            <ParamIndicator
              keyName={param.keyName}
              value={param.value}
              unit={param.unit}
              tooltipText={param.tooltipText}
              tooltipsEnabled={tooltipsEnabled}
              recommendation={recommendation}
              furnaceMode={furnaceMode}
            />
          </div>
        );
      })}
    </>
  );
};

export default ParamList;
