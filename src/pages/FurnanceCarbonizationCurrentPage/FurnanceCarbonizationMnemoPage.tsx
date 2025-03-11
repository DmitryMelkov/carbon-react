import React from 'react';
import FurnanceCarbonizationMnemo from '../../components/FurnanceCarbonization/mnemo/FurnanceCarbonizationMnemo';

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