import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FurnanceActivationMnemo from '../../components/FurnanceActivation/mnemo/FurnanceActivationMnemo';

const FurnanceActivationMnemoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `mpa${id}-data`;
  const title = `МПА №${id}`;


  // Проверяем, что id существует
  if (!id) {
    return <Navigate to="/error" />; // Перенаправляем на страницу ошибки или показываем сообщение
  }

  return (
    <>
      <FurnanceActivationMnemo url={url} title={title} id={id}/>
    </>
  );
};

export default FurnanceActivationMnemoPage;
