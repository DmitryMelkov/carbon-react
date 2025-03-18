import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';
import { useParams } from 'react-router-dom';

const DryerTemper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/sushilka${id}/data`; // Формируем URL на основе id
  const title = `Сушилка №${id}`;

  return (
    <>
      <IntervalProvider>
        <UniversalChart
          id={`Dryer temper №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={0}
          yMax={600}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: 'Температура в топке',
                  label: 'Температура в топке',
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: 'Температура в камере смешения',
                  label: 'Температура в камере смешения',
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: 'Температура уходящих газов',
                  label: 'Температура уходящих газов',
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

export default DryerTemper;
