import { useFetchData } from '../../../hooks/useFetchData';
import { FurnanceActivationData } from '../../../types/FurnanceActivationTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';

interface FurnanceActivationMnemoProps {
  url: string;
  title: string;
}

const FurnanceActivationMnemo: React.FC<FurnanceActivationMnemoProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<FurnanceActivationData>(url);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <>
      <TableHeader title={title} />
    </>
  );
};

export default FurnanceActivationMnemo;
