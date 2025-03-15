import { useFetchData } from '../../../hooks/useFetchData';
import { FurnanceActivationData } from '../../../types/FurnanceActivationTypes';
import Loader from '../../../ui/loader/Loader';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import TableComponent from '../../../ui/TableParams/TableParams';

interface FurnanceActivationCurrentProps {
  url: string;
  title: string;
}

// Функция для форматирования ключей
const formatKey = (key: string): string => {
  // Убираем первое слово (например, "Давление" или "Температура")
  const words = key.split(' ').slice(1);

  // Убираем "МПА2" или "МПА3" в конце
  const filteredWords = words.filter((word) => !word.match(/МПА\d+/i));

  // Первую букву каждого слова делаем заглавной
  const formattedWords = filteredWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // Собираем обратно в строку
  return formattedWords.join(' ');
};

// Функция для форматирования данных
const formatData = (data: Record<string, number | string>) => {
  const formattedData: Record<string, number | string> = {};

  for (const [key, value] of Object.entries(data)) {
    const formattedKey = formatKey(key);
    formattedData[formattedKey] = value;
  }

  return formattedData;
};

const FurnanceActivationCurrent: React.FC<FurnanceActivationCurrentProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<FurnanceActivationData>(url);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  // Форматируем данные перед выводом
  const formattedTemperatures = formatData(data.temperatures || {});
  const formattedPressures = formatData(data.pressures || {});

  return (
    <>
      <TableHeader title={title} />

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <TableComponent title="Текущие параметры (температура)" data={formattedTemperatures} />
        <TableComponent title="Текущие параметры (разрежение/давление)" data={formattedPressures} />
      </div>
    </>
  );
};

export default FurnanceActivationCurrent;
