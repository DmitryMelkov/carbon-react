import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';
import { useParams } from 'react-router-dom';

const FurnanceActivationTemper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/mpa${id}/data`; // Формируем URL на основе id
  const title = `МПА №${id}`;

  return (
    <>
      <IntervalProvider>
        <UniversalChart
          id={`Furnance Activation temper №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={0}
          yMax={600}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх регенератора левый МПА${id}`,
                  label: `Температура верх регенератора левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх ближний левый МПА${id}`,
                  label: `Температура верх ближний левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх дальний левый МПА${id}`,
                  label: `Температура верх дальний левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура середина ближняя левый МПА${id}`,
                  label: `Температура середина ближняя левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура середина дальняя левый МПА${id}`,
                  label: `Температура середина дальняя левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура низ ближний левый МПА${id}`,
                  label: `Температура низ ближний левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура низ дальний левый МПА${id}`,
                  label: `Температура низ дальний левый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх регенератора правый МПА${id}`,
                  label: `Температура верх регенератора правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх ближний правый МПА${id}`,
                  label: `Температура верх ближний правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура верх дальний правый МПА${id}`,
                  label: `Температура верх дальний правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура середина ближняя правый МПА${id}`,
                  label: `Температура середина ближняя правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура середина дальняя правый МПА${id}`,
                  label: `Температура середина дальняя правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура низ ближний правый МПА${id}`,
                  label: `Температура низ ближний правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура низ дальний правый МПА${id}`,
                  label: `Температура низ дальний правый МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура камера сгорания МПА${id}`,
                  label: `Температура камера сгорания МПА${id}`,
                  unit: '°C',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'temperatures',
              params: [
                {
                  key: `Температура дымовой боров МПА${id}`,
                  label: `Температура дымовой боров МПА${id}`,
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

export default FurnanceActivationTemper;
