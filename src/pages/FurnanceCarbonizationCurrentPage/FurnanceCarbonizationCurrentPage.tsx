import React from 'react';
import FurnanceCarbonizationCurrent from '../../components/FurnanceCarbonization/Current/FurnanceCarbonizationCurrent';
import { useParams } from 'react-router-dom';


const FurnanceCarbonizationCurrentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `vr${id}-data`;
  const title = `Печь Карбонизации №${id}`;


  return (
    <>
      <FurnanceCarbonizationCurrent url={url} title={title} />
    </>
  );
};

export default FurnanceCarbonizationCurrentPage;
