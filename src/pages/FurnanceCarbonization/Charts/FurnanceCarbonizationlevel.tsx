import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';
import { useParams } from 'react-router-dom';

const FurnanceCarbonizationLevel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/vr${id}/data`; // Формируем URL на основе id
  const title = `Печь карбонизации №${id}`;

  return (
    <>
      <IntervalProvider>
        <UniversalChart
          id={`Furnance Carbonization level №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={-100}
          yMax={100}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'levels',
              params: [
                {
                  key: 'В барабане котла',
                  label: 'В барабане котла',
                  unit: 'мм',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'im',
              params: [
                {
                  key: 'ИМ5 котел-утилизатор',
                  label: 'ИМ5 котел-утилизатор',
                  unit: '%',
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

export default FurnanceCarbonizationLevel;
