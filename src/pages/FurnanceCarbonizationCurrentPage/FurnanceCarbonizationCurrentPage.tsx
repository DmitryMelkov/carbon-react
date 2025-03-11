import React from 'react';
import FurnanceCarbonizationCurrent from '../../components/FurnanceCarbonization/current/FurnanceCarbonizationCurrent';


interface FurnanceCarbonizationCurrentPageProps {
  url: string;
  title: string;
}

const FurnanceCarbonizationCurrentPage: React.FC<FurnanceCarbonizationCurrentPageProps> = ({ url, title }) => {
  return (
    <>
      <FurnanceCarbonizationCurrent url={url} title={title} />
    </>
  );
};

export default FurnanceCarbonizationCurrentPage;