import React from 'react';
import FurnanceCarbonizationMnemo from '../../components/FurnanceCarbonization/FurnanceCarbonizationMnemo';

interface FurnanceCarbonizationMnemoPageProps {
  url: string;
  title: string;
}

const FurnanceCarbonizationMnemoPage: React.FC<FurnanceCarbonizationMnemoPageProps> = ({ url, title }) => {
  return (
    <>
      <FurnanceCarbonizationMnemo url={url} title={title} />
    </>
  );
};

export default FurnanceCarbonizationMnemoPage;