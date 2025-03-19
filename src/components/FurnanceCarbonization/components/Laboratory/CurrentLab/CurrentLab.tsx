import { useFetchData } from '../../../../../hooks/useFetchData';
import { LabData } from '../../../../../types/labData';
import styles from './CurrentLab.module.scss';

interface CurrentLabProps {
  url: string;
}

export default function CurrentLab({ url }: CurrentLabProps) {
  const { loading, data, error } = useFetchData<LabData>(`lab/pechvr${url}/last`);

  if (loading) return <div className={`${styles['loader-lab']}`}>Идет загрузка...</div>;
  if (error) return <div>error: {error}</div>;

  return (
    <table className={`${styles['table']}`}>
      <thead className={`${styles['table__thead']}`}>
        <tr className={`${styles['table__tr']}`}>
          <th className={`${styles['table__th']}`}>Наименование</th>
          <th className={`${styles['table__th']}`}>Знач.</th>
          <th className={`${styles['table__th']}`}>Дата</th>
          <th className={`${styles['table__th']}`}>Время</th>
        </tr>
      </thead>
      <tbody className={`${styles['table__tbody']}`}>
        <tr className={`${styles['table__tr']}`}>
          <td className={`${styles['table__td']}`}>Летучие в-ва, %</td>
          <td className={`${styles['table__td']}`}>{data?.value}</td>
          <td className={`${styles['table__td']}`}>{data?.valueDate}</td>
          <td className={`${styles['table__td']}`}>{data?.valueTime}</td>
        </tr>
        <tr className={`${styles['table__tr']}`}>
          <td className={`${styles['table__td']}`}>pH</td>
          <td className={`${styles['table__td']}`}>{data?.valuePH}</td>
          <td className={`${styles['table__td']}`}>{data?.valuePHDate}</td>
          <td className={`${styles['table__td']}`}>{data?.valuePHTime}</td>
        </tr>
        <tr className={`${styles['table__tr']}`}>
          <td className={`${styles['table__td']}`}>Суммарка</td>
          <td className={`${styles['table__td']}`}>{data?.valueSUM}</td>
          <td className={`${styles['table__td']}`}>{data?.valueSUMDate}</td>
          <td className={`${styles['table__td']}`}>{data?.valueSUMTime}</td>
        </tr>
      </tbody>
    </table>
  );
}
