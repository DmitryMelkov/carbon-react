import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FurnanceCarbonizationMnemo from '../../components/FurnanceCarbonization/Mnemo/FurnanceCarbonizationMnemo';

const FurnanceCarbonizationMnemoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `vr${id}-data`;
  const title = `Печь Карбонизации №${id}`;


  // Проверяем, что id существует
  if (!id) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки или показываем сообщение
  }

  return (
    <>
      <FurnanceCarbonizationMnemo url={url} title={title} id={id} />
    </>
  );
};

export default FurnanceCarbonizationMnemoPage;
