import { useState } from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { DryerData } from '../../../types/dryerDataTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import { getDryersParams } from '../../../utils/dryerParams';
import ParamList from '../../ParamList/ParamList';
import MnemoGifs from '../components/MnemoGifs';
import StaticItems from '../components/StaticItems';
import styles from '../../Dryer/Mnemo/DryerMnemo.module.scss';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { MdVisibility } from 'react-icons/md';
import KranItems from '../components/KranItems';

interface DryerMnemoProps {
  url: string;
  title: string;
  id: string;
}

const DryerMnemo: React.FC<DryerMnemoProps> = ({ url, title, id }) => {
  const { loading, data } = useFetchData<DryerData>(url);
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
  // ставим < 5 для демонстарции
  const isGorelkaPowerGreaterThan5 = gorelkaPower < 5;

  const TemperGasExhaust = data.temperatures['Температура уходящих газов'] || 0;
  const isTemperGasExhaust = TemperGasExhaust > 30;

  // Получаем список параметров
  const params = getDryersParams(data, id);

  console.log(params);

  return (
    <div>
      <TableHeader title={title} />

      <div className={`${styles['mnemo']}`}>
        <img className={`${styles['mnemo__img']}`} src="/img/sushilka.jpg" alt="Sushilka" />
        <div className={`${styles['mnemo__param-box--btns']}`}>
          <BtnDefault onClick={toggleTooltips} icon={<MdVisibility />} className={styles['first-btn']}>
            {tooltipsEnabled ? 'Выкл. тултипы' : 'Вкл. тултипы'}
          </BtnDefault>
        </div>
        {/* Статические надписи */}
        <StaticItems />

        {/* Параметры */}
        <ParamList params={params} tooltipsEnabled={tooltipsEnabled} />

        {/* GIFS */}
        <MnemoGifs isGorelkaPowerGreaterThan5={isGorelkaPowerGreaterThan5} isTemperGasExhaust={isTemperGasExhaust} />

        {/* Краны */}
        <KranItems data={data.im || {}} />
      </div>
    </div>
  );
};

export default DryerMnemo;
