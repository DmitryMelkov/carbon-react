import React from 'react';
import { Tooltip } from '@mui/material';
import styles from '../FurnanceCarbonization/mnemo/FurnanceCarbonizationMnemo.module.scss';
import { useCheckParameter } from '../../hooks/useChrckParameter';
import { Recommendation } from '../../types/Recommendations';

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
  // Используем хук для проверки выхода за пределы
  const isOutOfRange = useCheckParameter(value || 0, recommendation, furnaceMode);

  // Генерация текста для тултипа
  const getRecommendationText = () => {
    if (recommendation.modes) {
      return Object.entries(recommendation.modes)
        .map(([mode, { min, max }]) => {
          const parts = [];
          if (min !== undefined) parts.push(`не менее ${min}`);
          if (max !== undefined) parts.push(`не более ${max}`);
          return `${mode}: ${parts.join(', ')}`;
        })
        .join('\n');
    }

    const parts = [];
    if (recommendation.min !== undefined) parts.push(`не менее ${recommendation.min}`);
    if (recommendation.max !== undefined) parts.push(`не более ${recommendation.max}`);
    return parts.join(' и ');
  };

  // Объединяем текст тултипа с рекомендациями
  const fullTooltipText = `${tooltipText || ''}\n\nРекомендуемые значения:\n${getRecommendationText()}`;

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