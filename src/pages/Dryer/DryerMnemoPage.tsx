import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import DryerMnemo from '../../components/Dryer/Mnemo/DryerMnemo';


const DryerMnemoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `sushilka${id}-data`; // Формируем URL на основе id
  const title = `Сушилка №${id}`;


  // Проверяем, что id существует
  if (!id) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки или показываем сообщение
  }

  return (
    <>
      <DryerMnemo url={url} title={title} id={id}/>
    </>
  );
};

export default DryerMnemoPage;
