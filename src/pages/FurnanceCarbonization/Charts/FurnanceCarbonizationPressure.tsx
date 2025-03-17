import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';
import { useParams } from 'react-router-dom';

const FurnanceCarbonizationPressure: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/vr${id}/data`; // Формируем URL на основе id
  const title = `Печь карбонизации №${id}`;
  return (
    <div>
      <IntervalProvider>
        <UniversalChart
          id={`Dryer pressure №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={-20}
          yMax={30}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: 'Давление газов после скруббера',
                  label: 'Давление газов после скруббера',
                  unit: 'кгс/см²',
                },
                {
                  key: 'Пара в барабане котла',
                  label: 'Пара в барабане котла',
                  unit: 'кгс/см²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'vacuums',
              params: [
                {
                  key: 'В топке печи',
                  label: 'В топке печи',
                  unit: 'кг/см²',
                },
                {
                  key: 'В котле утилизаторе',
                  label: 'В котле утилизаторе',
                  unit: 'кг/см²',
                },
                {
                  key: 'Низ загрузочной камеры',
                  label: 'Низ загрузочной камеры',
                  unit: 'кгс/м²',
                },
              ],
            },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>
    </div>
  );
};

export default FurnanceCarbonizationPressure;
