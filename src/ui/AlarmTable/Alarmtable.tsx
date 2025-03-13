import React from 'react';
import styles from './AlarmTable.module.scss';
import { getRecommendation } from '../../utils/getRecomendationParams';
import { FurnanceCarbonizationData } from '../../types/furnanceCarbonizationTypes';
import useFurnaceCarbonizationMode from '../../hooks/useFurnaceCarbonizationMode';
import { checkParameter } from '../../utils/parameterCheck';

interface AlarmTableProps {
  data: Record<string, number | string | { value: number; percent: number }> | null;
  furnaceData?: FurnanceCarbonizationData | null;
}

const AlarmTable: React.FC<AlarmTableProps> = ({ data, furnaceData }) => {
  const entries = Object.entries(data || {});
  const furnaceMode = useFurnaceCarbonizationMode(furnaceData);

  const filteredEntries = entries
    .map(([key, value]) => {
      const displayValue =
        typeof value === 'object' && 'value' in value
          ? value.value
          : typeof value === 'string'
          ? parseFloat(value)
          : typeof value === 'number'
          ? value
          : 0;

      const { recommendation, unit } = getRecommendation(key);
      const { isOutOfRange } = checkParameter(displayValue, recommendation, furnaceMode ?? undefined);

      return {
        key,
        value: displayValue,
        unit,
        isOutOfRange,
      };
    })
    .filter((entry) => entry.isOutOfRange);

  return (
    <table className={styles['alarm-table']}>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Значение</th>
        </tr>
      </thead>
      <tbody>
        {filteredEntries.length > 0 ? (
          filteredEntries.map(({ key, value, unit }) => (
            <tr key={key} className={`${styles['alarm-row']} ${styles['out-of-range']}`}>
              <td>{key}</td>
              <td>
                {value} {unit}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>Все параметры в норме</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AlarmTable;
