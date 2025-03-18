import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import FurnanceActivationCurrent from '../../components/FurnanceActivation/Current/FurnanceActivationCurrent';

const FurnanceActivationCurrentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `mpa${id}-data`;
  const title = `МПА №${id}`;

  // Проверяем, что id существует
  if (!id) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки или показываем сообщение
  }

  return (
    <>
      <FurnanceActivationCurrent url={url} title={title}/>
    </>
  );
};

export default FurnanceActivationCurrentPage;
