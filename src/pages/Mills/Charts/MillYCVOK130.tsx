import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';


const MillYCVOK130: React.FC = () => {
  const url = 'http://localhost:3002/api/mill10b/data'; // Формируем URL на основе id

  return (
    <IntervalProvider>
      <UniversalChart
        id={'MillYCVOK130'}
        title={'График вибрации YCVOK-130'}
        yMin={0}
        yMax={30}
        datasets={[
          {
            apiUrl: url,
            dataKey: 'data',
            params: [
              {
                key: 'Фронтальное YCVOK130',
                label: 'Фронтальное YCVOK130',
                unit: 'мм/с',
              },
              {
                key: 'Поперечное YCVOK130',
                label: 'Поперечное YCVOK130',
                unit: 'мм/с',
              },
              {
                key: 'Осевое YCVOK130',
                label: 'Осевое YCVOK130',
                unit: 'мм/с',
              },
            ],
          },
        ]}
        showIntervalSelector={true}
      />
    </IntervalProvider>
  );
};

export default MillYCVOK130;
