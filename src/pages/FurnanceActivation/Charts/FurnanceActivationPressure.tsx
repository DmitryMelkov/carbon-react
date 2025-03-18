import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/Chart';
import { useParams } from 'react-router-dom';

const FurnanceActivationPressure: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `http://localhost:3002/api/mpa${id}/data`; // Формируем URL на основе id
  const title = `МПА №${id}`;
  return (
    <div>
      <IntervalProvider>
        <UniversalChart
          id={`Furnance Activation pressure №${id}`} // Динамический ID на основе номера котла
          title={`График ${title}`} // Динамический заголовок
          yMin={-30}
          yMax={180}
          datasets={[
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Разрежение дымовой боров МПА${id}`,
                  label: `Разрежение дымовой боров МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление воздух левый МПА${id}`,
                  label: `Давление воздух левый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление воздух правый МПА${id}`,
                  label: `Давление воздух правый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление низ ближний левый МПА${id}`,
                  label: `Давление низ ближний левый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление низ ближний правый МПА${id}`,
                  label: `Давление низ ближний правый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление середина ближняя левый МПА${id}`,
                  label: `Давление середина ближняя левый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление середина ближняя правый МПА${id}`,
                  label: `Давление середина ближняя правый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление середина дальняя левый МПА${id}`,
                  label: `Давление середина дальняя левый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление середина дальняя правый МПА${id}`,
                  label: `Давление середина дальняя правый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление верх дальний левый МПА${id}`,
                  label: `Давление верх дальний левый МПА${id}`,
                  unit: 'кгс/м²',
                },
              ],
            },
            {
              apiUrl: url,
              dataKey: 'pressures',
              params: [
                {
                  key: `Давление верх дальний правый МПА${id}`,
                  label: `Давление верх дальний правый МПА${id}`,
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

export default FurnanceActivationPressure;
