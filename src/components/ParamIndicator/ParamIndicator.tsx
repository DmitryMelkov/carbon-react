import React from 'react';
import { Tooltip } from '@mui/material';
import styles from '../FurnanceCarbonization/FurnanceCarbonizationMnemo.module.scss';

interface ParamIndicatorProps {
  keyName: string;
  value?: number | null;
  unit: string;
  tooltipText?: string;
}

const ParamIndicator: React.FC<ParamIndicatorProps> = ({ value, unit, tooltipText }) => {
  return (
    <Tooltip
      title={<span style={{ whiteSpace: 'pre-line', fontSize: '13px' }}>{tooltipText || ''}</span>}
      placement="top"
      arrow
      disableHoverListener={!tooltipText}
    >
      <span className={`${styles['mnemo__param-text']}`}>
        {value !== undefined && value !== null ? `${value} ${unit}` : '—'}
      </span>
    </Tooltip>
  );
};

export default ParamIndicator;
