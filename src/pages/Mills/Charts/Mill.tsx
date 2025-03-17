import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';

interface MillProps {
  id: string;
  title: string;
}

const Mill: React.FC<MillProps> = ({ id, title }) => {
  const url = `http://localhost:3002/api/mill${id}/data`; // Формируем URL на основе id

  return (
    <IntervalProvider>
      <UniversalChart
        id={`Mill${id}`}
        title={title}
        yMin={0}
        yMax={30}
        datasets={[
          {
            apiUrl: url,
            dataKey: 'data',
            params: [
              {
                key: `Фронтальное Мельница ${id}`,
                label: `Фронтальное Мельница ${id}`,
                unit: 'мм/с',
              },
              {
                key: `Поперечное Мельница ${id}`,
                label: `Поперечное Мельница ${id}`,
                unit: 'мм/с',
              },
              {
                key: `Осевое Мельница ${id}`,
                label: `Осевое Мельница ${id}`,
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

export default Mill;
