import React from 'react';
import DryerCurrent from '../../components/Dryer/DryerCurrent';
import { useParams } from 'react-router-dom';



const DryerCurrentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `vr${id}-data`; // Формируем URL на основе id
  const title = `Печь Карбонизации №${id}`;

  return (
    <>
      <DryerCurrent url={url} title={title} />
    </>
  );
};

export default DryerCurrentPage;