import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';

const Millsbm3: React.FC = () => {
  const url = 'http://localhost:3002/api/mill10b/data'; // Формируем URL на основе id

  return (
    <IntervalProvider>
      <UniversalChart
        id={'Millsbm3'}
        title={'График вибрации ШБМ №3'}
        yMin={0}
        yMax={30}
        datasets={[
          {
            apiUrl: url,
            dataKey: 'data',
            params: [
              {
                key: 'Осевое ШБМ3',
                label: 'Осевое ШБМ3',
                unit: 'мм/с',
              },
              {
                key: 'Вертикальное ШБМ3',
                label: 'Вертикальное ШБМ3',
                unit: 'мм/с',
              },
              {
                key: 'Поперечное ШБМ3',
                label: 'Поперечное ШБМ3',
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

export default Millsbm3;
