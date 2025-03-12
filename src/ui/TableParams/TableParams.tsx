import React, { useMemo } from 'react';
import styles from './TableParams.module.scss';
import { recommendedLevels, recommendedPressures, recommendedTemperatures, recommendedVacuums } from '../../utils/furnanceCarbonizationRecomendedValues';
import TableParamsRow from './TableParamsRow';
import useFurnaceCarbonizationMode from '../../hooks/useFurnaceCarbonizationMode';
import { FurnanceCarbonizationData } from '../../types/FurnanceCarbonizationTypes';

interface TableComponentProps {
  title: string;
  unit?: string;
  data: Record<string, number | string> | null;
  furnaceData: FurnanceCarbonizationData | null;
}

const TableComponent: React.FC<TableComponentProps> = ({ title, data, unit, furnaceData }) => {
  const entries = useMemo(() => data ? Object.entries(data) : [], [data]);
  const furnaceMode = useFurnaceCarbonizationMode(furnaceData);

  return (
    <>
      <table className={styles['table']}>
        <caption className={styles['table__title']}>{title}</caption>
        <thead className={styles['table__thead']}>
          <tr className={styles['table__tr']}>
            <th className={`${styles['table__th']} ${styles['table__left']}`}>Наименование</th>
            <th className={`${styles['table__th']}`}>Значение {unit}</th>
          </tr>
        </thead>
        <tbody className={styles['table__tbody']}>
          {entries.length > 0 ? (
            entries.map(([key, value]) => {
              let recommendation = {};
              if (unit === '°C') {
                recommendation = recommendedTemperatures[key] || {};
              } else if (unit === 'мм') {
                recommendation = recommendedLevels[key] || {};
              } else if (unit === 'кгс/см²') {
                recommendation = recommendedPressures[key] || {};
              } else if (unit === 'кгс/м²') {
                recommendation = recommendedVacuums[key] || {};
              }

              return (
                <TableParamsRow
                  key={key}
                  keyName={key}
                  value={value}
                  recommendation={recommendation}
                  mode={furnaceMode ?? undefined}
                />
              );
            })
          ) : (
            <tr className={styles['table__tr']}>
              <td colSpan={2}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
