import React from 'react';
import ReactorK296Current from '../../components/ReactorK296/Current/ReactorK296Current';

const ReactorK296CurrentPage: React.FC = () => {
  const url = 'reactorK296-data'; // Формируем URL на основе id
  const title = 'Смоляные реактора';

  return (
    <>
      <ReactorK296Current url={url} title={title}  />
    </>
  );
};

export default ReactorK296CurrentPage;
