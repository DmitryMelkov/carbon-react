import React from 'react';
import ReactorK296Mnemo from '../../components/ReactorK296/Mnemo/ReactorK296Mnemo';



const ReactorK296MnemoPage: React.FC = () => {
  const url = 'reactorK296-data'; // Формируем URL на основе id
  const title = 'Смоляные реактора';

  return (
    <>
      <ReactorK296Mnemo url={url} title={title}  />
    </>
  );
};

export default ReactorK296MnemoPage;
