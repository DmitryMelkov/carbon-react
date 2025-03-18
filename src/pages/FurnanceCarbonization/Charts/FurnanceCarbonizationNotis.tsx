import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';
import { useParams } from 'react-router-dom';

const FurnanceCarbonizationNotis: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/notis${id}/data`; // Формируем URL на основе id
  const title = `Печь карбонизации №${id}`;

  return (
    <>
      <IntervalProvider>
        <UniversalChart
          id={`Furnance Carbonization notis №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={0}
          yMax={1000}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'data',
              params: [
                {
                  key: `Доза (кг/ч) НОТИС${id}`,
                  label: `Доза (кг/ч) НОТИС${id}`,
                  unit: 'кг/ч',
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

export default FurnanceCarbonizationNotis;
