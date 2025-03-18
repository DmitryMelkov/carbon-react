import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';
import { useParams } from 'react-router-dom';

const FurnanceCarbonizationTemper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/vr${id}/data`; // Формируем URL на основе id
  const title = `Печь карбонизации №${id}`;

  return (
    <>
      <IntervalProvider>
        <UniversalChart
          id={`Furnance Carbonization temper №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={0}
          yMax={1500}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: '1-СК',
                  label: '1-СК',
                  unit: '°C',
                },
                {
                  key: '2-СК',
                  label: '2-СК',
                  unit: '°C',
                },
                {
                  key: '3-СК',
                  label: '3-СК',
                  unit: '°C',
                },
                {
                  key: 'Вверху камеры загрузки',
                  label: 'Вверху камеры загрузки',
                  unit: '°C',
                },
                {
                  key: 'Внизу камеры загрузки',
                  label: 'Внизу камеры загрузки',
                  unit: '°C',
                },
                {
                  key: 'На входе печи дожига',
                  label: 'На входе печи дожига',
                  unit: '°C',
                },
                {
                  key: 'Камеры выгрузки',
                  label: 'Камеры выгрузки',
                  unit: '°C',
                },
                {
                  key: 'Дымовых газов котла',
                  label: 'Дымовых газов котла',
                  unit: '°C',
                },
                {
                  key: 'Газов до скруббера',
                  label: 'Газов до скруббера',
                  unit: '°C',
                },
                {
                  key: 'Газов после скруббера',
                  label: 'Газов после скруббера',
                  unit: '°C',
                },
                {
                  key: 'Воды в ванне скруббера',
                  label: 'Воды в ванне скруббера',
                  unit: '°C',
                },
                {
                  key: 'Гранул после холод-ка',
                  label: 'Гранул после холод-ка',
                  unit: '°C',
                },
              ],
            },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>
    </>
  );
};

export default FurnanceCarbonizationTemper;
