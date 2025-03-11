import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import useFurnaceCarbonizationMode from '../../hooks/useFurnaceCarbonizationMode';
import { FurnanceCarbonizationData } from '../../types/FurnanceCarbonizationTypes';
import Loader from '../../ui/loader/Loader';
import TableHeader from '../../ui/Tableheader/TableHeader';
import StaticItems from './components/StaticItems';
import MnemoGifs from './components/MnemoGifs';
import styles from './FurnanceCarbonizationMnemo.module.scss';
import ParamList from '../ParamList/ParamList';
import { getFurnanceCarbonizationParams } from '../../utils/furnanceCarbonizationParams';
import BtnDefault from '../../ui/BtnDefault/BtnDefault';
import { MdScience, MdVisibility } from 'react-icons/md';

interface FurnanceCarbonizationMnemoProps {
  url: string;
  title: string;
}

const FurnanceCarbonizationMnemo: React.FC<FurnanceCarbonizationMnemoProps> = ({ url, title }) => {
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

  // Проверяем мощность горелки №1 или №2
  const gorelkaPower =
    data.gorelka['Мощность горелки №1'] !== undefined
      ? data.gorelka['Мощность горелки №1']
      : data.gorelka['Мощность горелки №2'];

  const isGorelkaPowerGreaterThan5 = gorelkaPower > 5;

  // Проверяем вакуум в котле утилизаторе
  const vacuumInBoiler = +(data.vacuums?.['В котле утилизаторе'] || 0);
  const isVacuumNegative = vacuumInBoiler < 0;

  // Получаем список параметров
  const params = getFurnanceCarbonizationParams(data);

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
      </div>

    </div>
  );
};

export default FurnanceCarbonizationMnemo;
