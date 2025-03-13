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
    <table className={styles['table']}>
      <thead className={styles['table__thead']}>
        <tr className={styles['table__tr']}>
          <th className={`${styles['table__th']} ${styles['table__left']}`}>Наименование</th>
          <th className={`${styles['table__th']}`}>Значение</th>
        </tr>
      </thead>
      <tbody className={styles['table__tbody']}>
        {filteredEntries.length > 0 ? (
          filteredEntries.map(({ key, value, unit }) => (
            <tr key={key} className={`${styles['table__tr']}`}>
              <td className={`${styles['table__td']} ${styles['table__left']} ${styles['out-of-range']}`}>{key}</td>
              <td className={`${styles['table__td']} ${styles['table__right']} ${styles['out-of-range']}`}>
                {value} {unit}
              </td>
            </tr>
          ))
        ) : (
          <tr className={styles['table__tr']}>
            <td colSpan={2} className={styles['table__td']}>Все параметры в норме</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AlarmTable;