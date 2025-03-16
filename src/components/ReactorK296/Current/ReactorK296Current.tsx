import React from 'react';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import { useFetchData } from '../../../hooks/useFetchData';
import { ReactorK296Data } from '../../../types/reactorK296DataTypes';
import Loader from '../../../ui/loader/Loader';
import TableComponent from '../../../ui/TableParams/TableParams';
import styles from './ReactorK296Current.module.scss';

interface ReactorK296CurrentProps {
  url: string;
  title: string;
}

const ReactorK296Current: React.FC<ReactorK296CurrentProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<ReactorK296Data>(url);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <>
      <TableHeader title={title} />
      <div className={styles['tables']}>
        <TableComponent title="Текущие параметры (температура)" data={data.temperatures || null} />
        <TableComponent title="Текущие параметры (уровень)" data={data.levels || null} />
      </div>
    </>
  );
};

export default ReactorK296Current;
