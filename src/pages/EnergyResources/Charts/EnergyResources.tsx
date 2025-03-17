import React from 'react';
import { IntervalProvider } from '../../../components/Charts/context/intervalContext';
import UniversalChart from '../../../components/Charts/chart';

const EnergyResources: React.FC = () => {
  const dd093Url = 'http://localhost:3002/api/de093/data';
  // const dd972Url = 'http://localhost:3002/api/de972/data';
  // const dd973Url = 'http://localhost:3002/api/de973/data';
  // const dd576Url = 'http://localhost:3002/api/de576/data';
  // const dd569Url = 'http://localhost:3002/api/de569/data';
  // const dd923Url = 'http://localhost:3002/api/de923/data';
  // const dd924Url = 'http://localhost:3002/api/de924/data';



  return (
    <IntervalProvider>
      <IntervalProvider>
        <UniversalChart
          id={'energy-resources-pressure'}
          title={'Графики давления узлов учета'}
          yMin={0}
          yMax={100}
          datasets={[
            {
              apiUrl: dd093Url,
              dataKey: 'data',
              params: [
                {
                  key: 'Давление DE093',
                  label: 'Давление DE093',
                  unit: 'MPa',
                },
              ],
            },
            // {
            //   apiUrl: dd972Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD972',
            //       label: 'Давление DD972',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd973Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD973',
            //       label: 'Давление DD973',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd576Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD576',
            //       label: 'Давление DD576',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd569Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD569',
            //       label: 'Давление DD569',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd923Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD923',
            //       label: 'Давление DD923',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd924Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Давление DD924',
            //       label: 'Давление DD924',
            //       unit: 'MPa',
            //     },
            //   ],
            // },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>
      <IntervalProvider>
        <UniversalChart
          id={'energy-resources-consumption'}
          title={'Графики расхода пара узлов учета'}
          yMin={0}
          yMax={5}
          datasets={[
            {
              apiUrl: dd093Url,
              dataKey: 'data',
              params: [
                {
                  key: 'Тонн/ч DE093',
                  label: 'Тонн/ч DE093',
                  unit: 'Расход, тонн/ч',
                },
              ],
            },
            // {
            //   apiUrl: dd972Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD972',
            //       label: 'Тонн/ч DD972',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd973Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD973',
            //       label: 'Тонн/ч DD973',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd576Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD576',
            //       label: 'Тонн/ч DD576',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd569Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD569',
            //       label: 'Тонн/ч DD569',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd923Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD923',
            //       label: 'Тонн/ч DD923',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
            // {
            //   apiUrl: dd924Url,
            //   dataKey: 'data',
            //   params: [
            //     {
            //       key: 'Тонн/ч DD924',
            //       label: 'Тонн/ч DD924',
            //       unit: 'Расход, тонн/ч',
            //     },
            //   ],
            // },
          ]}
          showIntervalSelector={true}
        />
      </IntervalProvider>

    </IntervalProvider>




  );
};

export default EnergyResources;
