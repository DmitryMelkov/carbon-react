import React from 'react';
import ParamIndicator from '../ParamIndicator/ParamIndicator';
import styles from '../FurnanceCarbonization/FurnanceCarbonizationMnemo.module.scss';

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
}

const ParamList: React.FC<ParamListProps> = ({ params, tooltipsEnabled }) => {
  return (
    <>
      {params.map((param) => (
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
          />
        </div>
      ))}
    </>
  );
};

export default ParamList;