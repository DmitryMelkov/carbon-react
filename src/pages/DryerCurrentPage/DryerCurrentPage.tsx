import React from 'react';
import DryerCurrent from '../../components/Dryer/DryerCurrent';

interface DryerCurrentPageProps {
  url: string;
  title: string;
}

const DryerCurrentPage: React.FC<DryerCurrentPageProps> = ({ url, title }) => {
  return (
    <>
      <DryerCurrent url={url} title={title} />
    </>
  );
};

export default DryerCurrentPage;