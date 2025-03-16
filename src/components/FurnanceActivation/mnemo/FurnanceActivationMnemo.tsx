import { useState } from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { FurnanceActivationData } from '../../../types/FurnanceActivationTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import styles from './FurnanceActivartionMnemo.module.scss';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { MdMap, MdVisibility } from 'react-icons/md';
import StaticItems from '../components/StaticItems';
import ParamActivationList from '../components/ParamActivationList';
import MnemoGifs from '../components/MnemoGifs';
import DocumentationModal from '../../DocumentationModal/DocumentationModal';

interface FurnanceActivationMnemoProps {
  url: string;
  title: string;
  id: string;
}

const FurnanceActivationMnemo: React.FC<FurnanceActivationMnemoProps> = ({ url, title, id }) => {
  const { loading, data } = useFetchData<FurnanceActivationData>(url);
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

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  // Проверяем давление воздуха правого, если > 10 то вентилятор работает
  const pressureAirRight = data.pressures[`Давление воздух правый МПА${id}`] || 0;
  const isPressureAirRight = pressureAirRight > 10;

  return (
    <>
      <TableHeader title={title} />
      <div className={`${styles['mnemo']}`}>
        <img className={`${styles['mnemo__img']}`} src="/img/pech-mpa.jpg" alt="furnanceActivation" />
        <div className={`${styles['mnemo__param-box--btns']}`}>
          <BtnDefault onClick={toggleTooltips} icon={<MdVisibility />} className={styles['first-btn']}>
            {tooltipsEnabled ? 'Выкл. тултипы' : 'Вкл. тултипы'}
          </BtnDefault>
          <BtnDefault
            className={`${styles['mnemo__param-box--btn-doc']}`}
            icon={<MdMap />}
            onClick={openDocumentationModal}
          >
            Документация объекта
          </BtnDefault>
        </div>
        {/* Статические надписи */}
        <StaticItems />
        {/* Параметры */}
        <ParamActivationList data={data} id={id} tooltipsEnabled={tooltipsEnabled} />
        {/* GIFS */}
        <MnemoGifs isPressureAirRight={isPressureAirRight} />

        {/*  модалка документации объектов  */}
        <DocumentationModal isOpen={isDocumentationModalOpen} onRequestClose={closeDocumentationModal} />
      </div>
    </>
  );
};

export default FurnanceActivationMnemo;
