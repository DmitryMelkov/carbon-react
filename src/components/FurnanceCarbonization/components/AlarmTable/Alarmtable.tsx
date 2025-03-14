import React, { useState } from 'react';
import styles from './AlarmTable.module.scss';
import TroubleshootingModal from '../TroubleshootingModal/TroubleshootingModal';
import { FaInfoCircle } from 'react-icons/fa';
import { FurnanceCarbonizationData } from '../../../../types/furnanceCarbonizationTypes';
import useFurnaceCarbonizationMode from '../../../../hooks/useFurnaceCarbonizationMode';
import { getRecommendation } from '../../../../utils/getRecomendationParams';
import { checkParameter } from '../../../../utils/parameterCheck';
import { troubleshootingData } from '../../../../utils/troubleshootingData';
import BtnDefault from '../../../../ui/BtnDefault/BtnDefault';

interface AlarmTableProps {
  data: Record<string, number | string | { value: number; percent: number }> | null;
  furnaceData?: FurnanceCarbonizationData | null;
}

const AlarmTable: React.FC<AlarmTableProps> = ({ data, furnaceData }) => {
  const entries = Object.entries(data || {});
  const furnaceMode = useFurnaceCarbonizationMode(furnaceData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedParameter, setSelectedParameter] = useState<string | null>(null);

  const openModal = (parameter: string) => {
    setSelectedParameter(parameter);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedParameter(null);
  };

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
    <>
      <table className={styles['table']}>
        <thead className={styles['table__thead']}>
          <tr className={styles['table__tr']}>
            <th className={`${styles['table__th']} ${styles['table__left']}`}>Наименование</th>
            <th className={`${styles['table__th']}`} colSpan={2}>
              Значение
            </th>
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
                <td className={`${styles['table__td']} ${styles['table__right']}`}>
                  <BtnDefault onClick={() => openModal(key)}>
                    <FaInfoCircle />
                  </BtnDefault>
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles['table__tr']}>
              <td colSpan={3} className={styles['table__td']}>
                Все параметры в норме
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedParameter && troubleshootingData[selectedParameter] && (
        <TroubleshootingModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          data={troubleshootingData[selectedParameter].data}
        />
      )}
    </>
  );
};

export default AlarmTable;
