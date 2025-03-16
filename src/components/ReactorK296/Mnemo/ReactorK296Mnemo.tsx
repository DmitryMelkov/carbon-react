import React, { useState } from 'react';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import { useFetchData } from '../../../hooks/useFetchData';
import { ReactorK296Data } from '../../../types/reactorK296DataTypes';
import Loader from '../../../ui/loader/Loader';
import styles from './ReactorK296Mnemo.module.scss';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { MdMap, MdVisibility } from 'react-icons/md';
import DocumentationModal from '../../DocumentationModal/DocumentationModal';
import ReactorK296param from '../components/ReactorK296';

interface ReactorK296MnemoProps {
  url: string;
  title: string;
}

const ReactorK296Mnemo: React.FC<ReactorK296MnemoProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<ReactorK296Data>(url);
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

  return (
    <>
      <TableHeader title={title} />
      <div className={`${styles['mnemo']}`}>
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
        <div className={`${styles['reactors']}`}>
          <ReactorK296param
            title="Смоляной реактор №1"
            tooltipsEnabled={tooltipsEnabled}
            temper={data.temperatures['Температура реактора 45/1']}
            level={data.levels['Уровень реактора 45/1']}
          />
          <ReactorK296param
            title="Смоляной реактор №2"
            tooltipsEnabled={tooltipsEnabled}
            temper={data.temperatures['Температура реактора 45/2']}
            level={data.levels['Уровень реактора 45/2']}
          />
          <ReactorK296param
            title="Смоляной реактор №3"
            tooltipsEnabled={tooltipsEnabled}
            temper={data.temperatures['Температура реактора 45/3']}
            level={data.levels['Уровень реактора 45/3']}
          />
          <ReactorK296param
            title="Смоляной реактор №4"
            tooltipsEnabled={tooltipsEnabled}
            temper={data.temperatures['Температура реактора 45/4']}
            level={data.levels['Уровень реактора 45/4']}
          />
        </div>
        <div className={`${styles['reactors-connect']}`}></div>
        {/*  модалка документации объектов  */}
        <DocumentationModal isOpen={isDocumentationModalOpen} onRequestClose={closeDocumentationModal} />
      </div>
    </>
  );
};

export default ReactorK296Mnemo;
