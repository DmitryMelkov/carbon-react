import React, { useState } from 'react';
import useFurnaceCarbonizationMode from '../../../hooks/useFurnaceCarbonizationMode';
import { FurnanceCarbonizationData, NotisData } from '../../../types/furnanceCarbonizationTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import StaticItems from '../components/StaticItems';
import MnemoGifs from '../components/MnemoGifs';
import styles from './FurnanceCarbonizationMnemo.module.scss';
import ParamList from '../../ParamList/ParamList';
import { getFurnanceCarbonizationParams } from '../../../utils/furnanceCarbonizationParams';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { MdMap, MdScience, MdVisibility } from 'react-icons/md';
import { useFetchData } from '../../../hooks/useFetchData';
import KranItems from '../components/KranItems';
import AlarmTable from '../components/AlarmTable/Alarmtable';
import DocumentationModal from '../components/DocumentationModal/DocumentationModal';
import LevelItems from '../components/LevelItems';
import Notis from '../components/Notis';

interface FurnanceCarbonizationMnemoProps {
  url: string;
  title: string;
  id: string;
}

const FurnanceCarbonizationMnemo: React.FC<FurnanceCarbonizationMnemoProps> = ({ url, title, id }) => {
  const { loading, data } = useFetchData<FurnanceCarbonizationData>(url);
  const { loading: notisLoading, data: notisData } = useFetchData<NotisData>(`notis${id}-data`);
  const furnaceMode = useFurnaceCarbonizationMode(data);
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);
  const [isDocumentationModalOpen, setIsDocumentationModalOpen] = useState(false);

  const toggleTooltips = () => {
    setTooltipsEnabled((prev) => !prev);
  };

  const openDocumentationModal = () => {
    setIsDocumentationModalOpen(true);
  };

  const closeDocumentationModal = () => {
    setIsDocumentationModalOpen(false);
  };

  if (loading || notisLoading) {
    return <Loader />;
  }

  if (!data || !notisData) {
    return <div>Ошибка загрузки данных</div>;
  }

  // Проверяем мощность горелки на основе id
  const gorelkaPower = data.gorelka[`Мощность горелки №${id}`] || 0;
  const isGorelkaPowerGreaterThan5 = gorelkaPower > 5;

  // Проверяем вакуум в котле утилизаторе
  const vacuumInBoiler = +(data.vacuums?.['В котле утилизаторе'] || 0);
  const isVacuumNegative = vacuumInBoiler < 0;

  // Получаем список параметров
  const params = getFurnanceCarbonizationParams(data, id);

  // Подготовка данных для таблицы алармов
  const alarmData = {
    ...data.temperatures,
    ...data.pressures,
    ...data.levels,
    ...data.vacuums,
  };

  // console.log(alarmData);


  return (
    <>
      <div className={`${styles['mnemo-header']}`}>
        <TableHeader title={title} furnaceMode={furnaceMode} />
      </div>

      <div className={`${styles['mnemo']}`}>
        <img className={`${styles['mnemo__img']}`} src="/img/pech-vr.jpg" alt="FurnanceCarbonization" />
        {/* Таблица алармов */}
        <div className={styles['alarm-table']}>
          <AlarmTable data={alarmData} furnaceData={data} />
        </div>
        {/* кнопки тултипы/лаборатория */}
        <div className={`${styles['mnemo__param-box--btns']}`}>
          <BtnDefault onClick={toggleTooltips} icon={<MdVisibility />} className={styles['first-btn']}>
            {tooltipsEnabled ? 'Выкл. тултипы' : 'Вкл. тултипы'}
          </BtnDefault>
          <BtnDefault icon={<MdScience />}>Для лаборатории</BtnDefault>
        </div>
        {/* кнопка документация */}
        <BtnDefault
          className={`${styles['mnemo__param-box--btn-doc']}`}
          icon={<MdMap />}
          onClick={openDocumentationModal}
        >
          Документация объекта
        </BtnDefault>

        {/* Статические надписи */}
        <StaticItems />
        {/* Параметры */}
        <ParamList params={params} tooltipsEnabled={tooltipsEnabled} />
        {/* горелка, вентиляторы, топка */}
        <MnemoGifs isGorelkaPowerGreaterThan5={isGorelkaPowerGreaterThan5} isVacuumNegative={isVacuumNegative} />
        {/* Краны */}
        <KranItems data={data.im || {}} />
        {/* Уровни */}
        <LevelItems levels={data.levels} />

        {/*  модалка документации объектов  */}
        <DocumentationModal isOpen={isDocumentationModalOpen} onRequestClose={closeDocumentationModal} />

        {/* Компонент NOTIS */}
        <Notis notisData={notisData} id={id} />
      </div>
    </>
  );
};

export default FurnanceCarbonizationMnemo;