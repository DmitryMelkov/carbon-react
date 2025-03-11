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
}

const ParamList: React.FC<ParamListProps> = ({ params }) => {
  return (
    <>
      {params.map((param) => (
        <div className={`${styles['mnemo__param']} ${styles[param.className]}`} key={param.keyName}>
          <ParamIndicator
            keyName={param.keyName}
            value={param.value}
            unit={param.unit}
            tooltipText={param.tooltipText}
          />
        </div>
      ))}
    </>
  );
};

export default ParamList;