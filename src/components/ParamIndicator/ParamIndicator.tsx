import React from 'react';
import { Tooltip } from '@mui/material';
import styles from '../FurnanceCarbonization/FurnanceCarbonizationMnemo.module.scss';

interface ParamIndicatorProps {
  keyName: string;
  value?: number | null;
  unit: string;
  tooltipText?: string;
  tooltipsEnabled: boolean;
}

const ParamIndicator: React.FC<ParamIndicatorProps> = ({ value, unit, tooltipText, tooltipsEnabled }) => {
  return (
    <Tooltip
      title={<span style={{ whiteSpace: 'pre-line', fontSize: '13px' }}>{tooltipText || ''}</span>}
      placement="top"
      arrow
      disableHoverListener={!tooltipsEnabled || !tooltipText}
    >
      <span className={`${styles['mnemo__param-text']}`}>
        {value !== undefined && value !== null ? `${value} ${unit}` : '—'}
      </span>
    </Tooltip>
  );
};

export default ParamIndicator;