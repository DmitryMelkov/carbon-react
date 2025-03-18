import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';

const MillYGM9517: React.FC = () => {
  const url = 'http://localhost:3002/api/mill10b/data'; // Формируем URL на основе id

  return (
    <IntervalProvider>
      <UniversalChart
        id={'MillYGM9517'}
        title={'График вибрации YGM-9517'}
        yMin={0}
        yMax={30}
        datasets={[
          {
            apiUrl: url,
            dataKey: 'data',
            params: [
              {
                key: 'Фронтальное YGM9517',
                label: 'Фронтальное YGM9517',
                unit: 'мм/с',
              },
              {
                key: 'Осевое YGM9517',
                label: 'Осевое YGM9517',
                unit: 'мм/с',
              },
              {
                key: 'Поперечное YGM9517',
                label: 'Поперечное YGM9517',
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

export default MillYGM9517;
