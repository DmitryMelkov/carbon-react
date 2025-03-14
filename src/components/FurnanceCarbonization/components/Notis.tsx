import React from 'react';
import styles from '../Mnemo/FurnanceCarbonizationMnemo.module.scss';
import { NotisData } from '../../../types/furnanceCarbonizationTypes';

interface NotisProps {
  notisData: NotisData;
  id: string;
}

const Notis: React.FC<NotisProps> = ({ notisData, id }) => {
  // Получаем ключ для дозы NOTIS
  const notisDoseKey = `Доза (кг/ч) НОТИС${id}` as keyof typeof notisData.data;
  const notisDose = notisDoseKey in notisData.data ? notisData.data[notisDoseKey] : 'Неизвестно';

  // Получаем статус NOTIS
  const notisStatus = notisData.status;

  return (
    <>
      {/* Отображение дозы NOTIS */}
      <div className={`${styles['mnemo__param']} ${styles['doza-notis']}`}>
        <span className={`${styles['mnemo__param-text']}`}>{notisDose} кг/ч</span>
      </div>

      {/* Отображение статуса NOTIS */}
      <div className={`${styles['mnemo__param-descr']} ${styles['notis-status-text']}`}>
        Статус:
        {notisStatus === 'working' && <span className={`${styles['notis-span']}`}>Идет загрузка</span>}
        {notisStatus === 'idle' && <span className={`${styles['notis-span']}`}>Загрузки нет</span>}
        {notisStatus !== 'working' && notisStatus !== 'idle' && (
          <span className={`${styles['notis-span']}`}>Нет данных</span>
        )}
      </div>
    </>
  );
};

export default Notis;