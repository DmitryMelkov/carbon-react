import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { SushilkaData } from '../../types/SushilkaData';
import styles from './TabPC.module.scss';

interface TabSushilkaProps {
  url: string;
  title: string;
}

const TabSushilka: React.FC<TabSushilkaProps> = ({ url, title }) => {
  const { loading, data, error } = useFetchData<SushilkaData>(url);

  if (loading) {
    return (
      <div className={styles['spinnerContainer']}>
        <div className={styles['spinner']}></div>
      </div>
    );
  }

  if (error) {
    return <div>Ошибка загрузки данных: {error}</div>;
  }

  return (
    <div className={styles['tab-pc']}>
      <h2 className={styles['tab-pc__content-title']}>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          {data && Object.entries(data.temperatures).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.vacuums).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.gorelka).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.im).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{typeof value === 'boolean' ? (value ? 'Включено' : 'Выключено') : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabSushilka;
