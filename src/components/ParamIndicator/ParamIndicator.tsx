import React from 'react';
import { Tooltip } from '@mui/material';
import styles from '../FurnanceCarbonization/mnemo/FurnanceCarbonizationMnemo.module.scss';
import { useParameterCheck } from '../../hooks/useCheckParameter';
import { Recommendation } from '../../types/recommendations';

interface ParamIndicatorProps {
  keyName: string;
  value?: number | null;
  unit: string;
  tooltipText?: string;
  tooltipsEnabled: boolean;
  recommendation: Recommendation;
  furnaceMode?: string;
}

const ParamIndicator: React.FC<ParamIndicatorProps> = ({
  value,
  unit,
  tooltipText,
  tooltipsEnabled,
  recommendation,
  furnaceMode,
}) => {
  const { isOutOfRange, recommendationText } = useParameterCheck(value || 0, recommendation, furnaceMode);

  const fullTooltipText = `${tooltipText || ''}\n\nРекомендуемые значения:\n${recommendationText}`;

  return (
    <Tooltip
      title={<span style={{ whiteSpace: 'pre-line', fontSize: '13px' }}>{fullTooltipText}</span>}
      placement="top"
      arrow
      disableHoverListener={!tooltipsEnabled || !tooltipText}
    >
      <span className={`${styles['mnemo__param-text']} ${isOutOfRange ? styles['out-of-range'] : ''}`}>
        {value !== undefined && value !== null ? `${value} ${unit}` : '—'}
      </span>
    </Tooltip>
  );
};

export default ParamIndicator;
