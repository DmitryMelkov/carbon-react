import React from 'react';
import styles from './TableParams.module.scss';

import { Recommendation } from '../../types/recommendations';
import { useParameterCheck } from '../../hooks/useCheckParameter';

interface TableParamsRowProps {
  keyName: string;
  value: number | string;
  recommendation: Recommendation;
  mode?: string;
}

const TableParamsRow: React.FC<TableParamsRowProps> = ({ keyName, value, recommendation, mode = '' }) => {
  const { isOutOfRange } = useParameterCheck(typeof value === 'number' ? value : 0, recommendation, mode);

  return (
    <tr className={styles['table__tr']}>
      <td className={`${styles['table__td']} ${styles['table__left']}`}>{keyName}</td>
      <td className={`${styles['table__td']} ${styles['table__right']} ${isOutOfRange ? styles['out-of-range'] : ''}`}>
        {value}
      </td>
    </tr>
  );
};

export default TableParamsRow;
