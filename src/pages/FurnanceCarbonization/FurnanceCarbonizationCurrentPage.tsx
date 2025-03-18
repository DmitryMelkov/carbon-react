import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import FurnanceCarbonizationCurrent from '../../components/FurnanceCarbonization/Current/FurnanceCarbonizationCurrent';

const FurnanceCarbonizationCurrentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `vr${id}-data`;
  const title = `Печь Карбонизации №${id}`;

  // Проверяем, что id существует
  if (!id) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки или показываем сообщение
  }

  return (
    <>
      <FurnanceCarbonizationCurrent url={url} title={title} id={id} />
    </>
  );
};

export default FurnanceCarbonizationCurrentPage;
