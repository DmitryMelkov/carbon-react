import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';

const ReactorK296: React.FC = () => {
  const url = 'http://localhost:3002/api/reactor296/data';

  return (
    <IntervalProvider>
      <IntervalProvider>
        <UniversalChart
          id={'reactor296-temper'}
          title={'Смоляные реактора температуры'}
          yMin={0}
          yMax={100}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: 'Температура реактора 45/1',
                  label: 'Температура реактора 45/1',
                  unit: '°C',
                },
                {
                  key: 'Температура реактора 45/2',
                  label: 'Температура реактора 45/2',
                  unit: '°C',
                },
                {
                  key: 'Температура реактора 45/3',
                  label: 'Температура реактора 45/3',
                  unit: '°C',
                },
                {
                  key: 'Температура реактора 45/4',
                  label: 'Температура реактора 45/4',
                  unit: '°C',
                },
              ],
            },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>

      <IntervalProvider>
        <UniversalChart
          id={'reactor296-level'}
          title={'Смоляные реактора температуры'}
          yMin={0}
          yMax={2500}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'levels',
              params: [
                {
                  key: 'Уровень реактора 45/1',
                  label: 'Уровень реактора 45/1',
                  unit: 'мм',
                },
                {
                  key: 'Уровень реактора 45/2',
                  label: 'Уровень реактора 45/2',
                  unit: 'мм',
                },
                {
                  key: 'Уровень реактора 45/3',
                  label: 'Уровень реактора 45/3',
                  unit: 'мм',
                },
                {
                  key: 'Уровень реактора 45/4',
                  label: 'Уровень реактора 45/4',
                  unit: 'мм',
                },
              ],
            },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>
    </IntervalProvider>
  );
};

export default ReactorK296;
