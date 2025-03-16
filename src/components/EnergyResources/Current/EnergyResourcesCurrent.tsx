import React from 'react';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import styles from './EnergyResourcesCurrent.module.scss';
import { useFetchData } from '../../../hooks/useFetchData';
import { EnergyResourceData } from '../../../types/energyResourcesDataTypes';
import Loader from '../../../ui/loader/Loader';

const EnergyResourcesCurrent: React.FC = () => {
  const { loading, data } = useFetchData<EnergyResourceData>('uzliUchetaCarbon');

  if (loading || !data) {
    return <Loader />;
  }

  // Извлечение данных
  const devicesData = Object.values(data);

  // Сопоставление типоразмеров
  const typeSizes = {
    dd569: 'Dy 150',
    dd576: 'Dy 150',
    dd923: 'Dy 100',
    dd924: 'Dy 100',
    de093: 'Dy 80',
    dd972: 'Dy 80',
    dd973: 'Dy 80',
  };

  // Сопоставление названий узлов учета
  const getNodeName = (key: string) => {
    switch (key) {
      case 'dd569':
        return 'УТВХ от к.265 магистраль';
      case 'dd576':
        return 'Carbon к. 10в1 общий коллектор';
      case 'dd923':
        return 'Котел утилизатор №1';
      case 'dd924':
        return 'Котел утилизатор №2';
      case 'de093':
        return 'МПА №2';
      case 'dd972':
        return 'МПА №3';
      case 'dd973':
        return 'МПА №4';
      default:
        return key;
    }
  };

  const steamGenerationData = devicesData.filter((device) => !['DE093', 'DD972', 'DD973'].includes(device.device));
  const steamConsumption = devicesData.filter((device) => ['DE093', 'DD972', 'DD973'].includes(device.device));

  return (
    <div className={styles['energy-resources-current']}>
      <TableHeader title="Энергоресурсы" />
      <div className={styles['tables']}>
        <table className={styles['energy-resources__table']}>
          <caption className={styles['energy-resources__title']}>Генерация пара</caption>
          <thead className={styles['energy-resources__table-head']}>
            <tr className={styles['energy-resources__table-row']}>
              <th className={styles['energy-resources__table-header']}>Наименование узла учета</th>
              <th className={styles['energy-resources__table-header']}>Типоразмер</th>
              <th className={styles['energy-resources__table-header']}>Гкал/ч</th>
              <th className={styles['energy-resources__table-header']}>Куб/ч</th>
              <th className={styles['energy-resources__table-header']}>Тонн/ч</th>
              <th className={styles['energy-resources__table-header']}>Давление (МПа)</th>
              <th className={styles['energy-resources__table-header']}>Температура (°C)</th>
            </tr>
          </thead>
          <tbody className={styles['energy-resources__table-body']}>
            {steamGenerationData.map((deviceData) => {
              const gcalKey = `Гкал/ч ${deviceData.device}`;
              const cubKey = `Куб/ч ${deviceData.device}`;
              const tonKey = `Тонн/ч ${deviceData.device}`;
              const pressureKey = `Давление ${deviceData.device}`;
              const tempKey = `Температура ${deviceData.device}`;

              return (
                <tr key={deviceData.device} className={styles['energy-resources__table-row']}>
                  <td className={styles['energy-resources__table-cell']}>
                    {getNodeName(deviceData.device.toLowerCase())}
                  </td>
                  <td className={styles['energy-resources__table-cell']}>
                    {typeSizes[deviceData.device.toLowerCase() as keyof typeof typeSizes]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[gcalKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[cubKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[tonKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[pressureKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[tempKey]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className={styles['energy-resources__table']}>
          <caption className={styles['energy-resources__title']}>Потребление пара</caption>
          <thead className={styles['energy-resources__table-head']}>
            <tr className={styles['energy-resources__table-row']}>
              <th className={styles['energy-resources__table-header']}>Наименование узла учета</th>
              <th className={styles['energy-resources__table-header']}>Типоразмер</th>
              <th className={styles['energy-resources__table-header']}>Гкал/ч</th>
              <th className={styles['energy-resources__table-header']}>Куб/ч</th>
              <th className={styles['energy-resources__table-header']}>Тонн/ч</th>
              <th className={styles['energy-resources__table-header']}>Давление (МПа)</th>
              <th className={styles['energy-resources__table-header']}>Температура (°C)</th>
            </tr>
          </thead>
          <tbody className={styles['energy-resources__table-body']}>
            {steamConsumption.map((deviceData) => {
              const gcalKey = `Гкал/ч ${deviceData.device}`;
              const cubKey = `Куб/ч ${deviceData.device}`;
              const tonKey = `Тонн/ч ${deviceData.device}`;
              const pressureKey = `Давление ${deviceData.device}`;
              const tempKey = `Температура ${deviceData.device}`;

              return (
                <tr key={deviceData.device} className={styles['energy-resources__table-row']}>
                  <td className={`${styles['energy-resources__table-cell']}`}>
                    {getNodeName(deviceData.device.toLowerCase())}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']}`}>
                    {typeSizes[deviceData.device.toLowerCase() as keyof typeof typeSizes]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[gcalKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[cubKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[tonKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[pressureKey]}
                  </td>
                  <td className={`${styles['energy-resources__table-cell']} ${styles['value']}`}>
                    {deviceData.data[tempKey]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnergyResourcesCurrent;
