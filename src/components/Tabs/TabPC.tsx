import useFetchData from '../../hooks/useFetchData';
import { PCData } from '../../types/PCData';

import styles from './TabPC.module.scss';

interface TabPCProps {
  url: string;
  title: string;
}

const TabPC: React.FC<TabPCProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<PCData>(url);

  if (loading) {
    return (
      <div className={styles['spinnerContainer']}>
        <div className={styles['spinner']}></div>
      </div>
    );
  }

  return (
    <div className={styles['tab-pc']}>
      <h2 className={`${styles['tab-pc__content-title']} title-reset`}>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          {data && Object.entries(data.temperatures).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.levels).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.value} ({value.percent}%)</td>
            </tr>
          ))}
          {data && Object.entries(data.pressures).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.vacuums).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          {data && Object.entries(data.im).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{typeof value === 'boolean' ? (value ? 'Включено' : 'Выключено') : value}</td>
            </tr>
          ))}
          {data && Object.entries(data.gorelka).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabPC;