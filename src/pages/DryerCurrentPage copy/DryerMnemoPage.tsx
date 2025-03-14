import React from 'react';

import { useParams } from 'react-router-dom';
import DryerMnemo from '../../components/Dryer/Mnemo/DryerMnemo';

const DryerMnemoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `sushilka${id}-data`; // Формируем URL на основе id
  const title = `Сушилка №${id}`;

  return (
    <>
      <DryerMnemo url={url} title={title} />
    </>
  );
};

export default DryerMnemoPage;
