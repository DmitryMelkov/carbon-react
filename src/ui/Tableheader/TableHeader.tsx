import React, { useState, useEffect } from 'react';
import styles from './TableHeader.module.scss';

interface TableHeaderProps {
  title: string;
  furnaceMode?: string | null;
  notisStatus?: string | null;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title, furnaceMode, notisStatus }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentDate(date);
      setCurrentTime(time);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles['table-header']}`}>
      <h1 className={`${styles['table-header__title']} title-reset`}>
        <span className={`${styles['table-header__title-span']}`}>Карбон</span>
        {title}
      </h1>
      <div className={`${styles['table-header__box']}`}>
        <div className={`${styles['table-header__date']}`}>{currentDate}</div>
        <div className={`${styles['table-header__time']}`}>{currentTime}</div>
      </div>

      {furnaceMode && (
        <div className={`${styles['table-header__subtitle']}`}>
          Режим:
          <span className={`${styles['table-header__subtitle-span']}`}>{furnaceMode}</span>
        </div>
      )}

      {notisStatus && (
        <div className={`${styles['table-header__subtitle']}`}>
          Статус нотиса:
          {notisStatus === 'working' && (
            <span className={`${styles['table-header__subtitle-span']}`}>Идет загрузка</span>
          )}
          {notisStatus === 'idle' && <span className={`${styles['table-header__subtitle-span']}`}>Загрузки нет</span>}
          {notisStatus !== 'working' && notisStatus !== 'idle' && (
            <span className={`${styles['table-header__subtitle-span']}`}>Нет данных</span>
          )}
        </div>
      )}
    </div>
  );
};

export default TableHeader;
