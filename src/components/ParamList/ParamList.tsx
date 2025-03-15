import React from 'react';
import ParamIndicator from '../ParamIndicator/ParamIndicator';
import styles from '../../styles/Params.module.scss';
import { getRecommendation } from '../../utils/getRecomendationParams';

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
  furnaceMode?: string;
}

const ParamList: React.FC<ParamListProps> = ({ params, tooltipsEnabled, furnaceMode }) => {
  return (
    <>
      {params.map((param) => {
      const recommendation = getRecommendation(param.keyName, param.unit).recommendation;

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
