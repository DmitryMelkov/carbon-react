// FurnanceCarbonizationMnemo.tsx
import React, { useState } from 'react';
import useFurnaceCarbonizationMode from '../../../hooks/useFurnaceCarbonizationMode';
import { FurnanceCarbonizationData } from '../../../types/furnanceCarbonizationTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import StaticItems from '../components/StaticItems';
import MnemoGifs from '../components/MnemoGifs';
import styles from './FurnanceCarbonizationMnemo.module.scss';
import ParamList from '../../ParamList/ParamList';
import { getFurnanceCarbonizationParams } from '../../../utils/furnanceCarbonizationParams';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { MdScience, MdVisibility } from 'react-icons/md';
import { useFetchData } from '../../../hooks/useFetchData';
import KranItems from '../components/KranItems';

interface FurnanceCarbonizationMnemoProps {
  url: string;
  title: string;
  id: string;
}

const FurnanceCarbonizationMnemo: React.FC<FurnanceCarbonizationMnemoProps> = ({ url, title, id }) => {
  const { loading, data } = useFetchData<FurnanceCarbonizationData>(url);
  const furnaceMode = useFurnaceCarbonizationMode(data);
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

  const toggleTooltips = () => {
    setTooltipsEnabled((prev) => !prev);
  };

  if (loading) {
    return <Loader />;
  }

  if (!data) {
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

  return (
    <div>
      <div className={`${styles['mnemo-header']}`}>
        <TableHeader title={title} furnaceMode={furnaceMode} />
      </div>

      <div className={`${styles['mnemo']}`}>
        <img className={`${styles['mnemo__img']}`} src="/img/pech-vr.jpg" alt="Котел" />
        {/* кнопки тултипы/лаборатория */}
        <div className={`${styles['mnemo__param-box--btns']}`}>
          <BtnDefault onClick={toggleTooltips} icon={<MdVisibility />} className={styles['first-btn']}>
            {tooltipsEnabled ? 'Выкл. тултипы' : 'Вкл. тултипы'}
          </BtnDefault>
          <BtnDefault icon={<MdScience />}>Для лаборатории</BtnDefault>
        </div>
        {/* Статические надписи */}
        <StaticItems />
        {/* Параметры */}
        <ParamList params={params} tooltipsEnabled={tooltipsEnabled} />
        {/* горелка, вентиляторы, топка */}
        <MnemoGifs isGorelkaPowerGreaterThan5={isGorelkaPowerGreaterThan5} isVacuumNegative={isVacuumNegative} />
        {/* Краны */}
        <KranItems data={data.im || {}} />
      </div>
    </div>
  );
};

export default FurnanceCarbonizationMnemo;
