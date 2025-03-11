import useFetchData from '../../hooks/useFetchData';
import useFurnaceCarbonizationMode from '../../hooks/useFurnaceCarbonizationMode';
import { FurnanceCarbonizationData } from '../../types/FurnanceCarbonizationTypes';
import Loader from '../../ui/loader/Loader';
import TableHeader from '../../ui/Tableheader/TableHeader';
import StaticItems from './components/StaticItems';
import styles from './FurnanceCarbonizationMnemo.module.scss';

interface FurnanceCarbonizationMnemoProps {
  url: string;
  title: string;
}

const FurnanceCarbonizationMnemo: React.FC<FurnanceCarbonizationMnemoProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<FurnanceCarbonizationData>(url);
  // Используем кастомный хук для определения режима работы печи
  const furnaceMode = useFurnaceCarbonizationMode(data);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div>
      <div className={`${styles['mnemo-header']}`}>
        <TableHeader title={title} furnaceMode={furnaceMode} />
      </div>

      <div className={`${styles['mnemo']}`}>
        <img className={`${styles['mnemo__img']}`} src="/img/pech-vr.jpg" />
        <StaticItems />
      </div>

      <span className={`${styles['span']}`}>{url}</span>
    </div>
  );
};

export default FurnanceCarbonizationMnemo;
