import { useState } from 'react';
import styles from './LastDayLab.module.scss';
import { FaTrash } from 'react-icons/fa';
import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify';
import Loader from '../../../../../../ui/loader/Loader';
import { LabLastDay } from '../../../../../../types/labData';
import { useFetchData } from '../../../../../../hooks/useFetchData';

interface LastDayLabProps {
  url: string;
}

export default function LastDayLab({ url }: LastDayLabProps) {
  const { loading, data, error } = useFetchData<LabLastDay[]>(`lab/pechVr${url}/last-day`);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LabLastDay | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const sortedData = data
    ? [...data].sort((a, b) => {
        const [hoursA, minutesA] = a.recordTime.split(':').map(Number);
        const [hoursB, minutesB] = b.recordTime.split(':').map(Number);
        const totalMinutesA = hoursA * 60 + minutesA;
        const totalMinutesB = hoursB * 60 + minutesB;
        return totalMinutesB - totalMinutesA;
      })
    : [];

  const handleDeleteClick = (item: LabLastDay) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const confirmDelete = async () => {
    if (!selectedItem) return;
    setIsDeleting(true);
    try {
      const response = await fetch(`http://localhost:3002/api/lab/delete/pechVr${url}/${selectedItem._id.toString()}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Данные удалены');
      } else {
        toast.error('Ошибка при удалении записи');
      }
    } catch (error) {
      console.error('Ошибка при удалении записи:', error);
      toast.error('Ошибка при удалении записи');
    }
    setIsDeleting(false);
    closeDeleteModal();
  };

  if (loading) {
    return (
      <div className={styles['lab-last-day']}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>error: {error}</div>;
  }
  if (!data || data.length === 0) {
    return (
      <div className={styles['lab-last-day']}>
        <div className={styles['lab-last-day__empty']}>Нет данных за последние сутки</div>
      </div>
    );
  }

  return (
    <>
      <div className={styles['lab-last-day']}>
        <table className={styles['lab-last-day__table']}>
          <thead className={styles['lab-last-day__table-head']}>
            <tr className={styles['lab-last-day__table-row']}>
              <th className={styles['lab-last-day__table-header']}>Дата</th>
              <th className={styles['lab-last-day__table-header']}>Время</th>
              <th className={styles['lab-last-day__table-header']}>Летучие в-ва, %</th>
              <th className={styles['lab-last-day__table-header']}>pH</th>
              <th className={styles['lab-last-day__table-header']}>Суммарка</th>
              <th className={styles['lab-last-day__table-header']}>Действия</th>
            </tr>
          </thead>
          <tbody className={styles['lab-last-day__table-body']}>
            {sortedData.map((item, index) => (
              <tr className={styles['lab-last-day__table-row']} key={index}>
                <td className={styles['lab-last-day__table-cell']}>{item.recordDate}</td>
                <td className={styles['lab-last-day__table-cell']}>{item.recordTime}</td>
                <td className={styles['lab-last-day__table-cell']}>{item.value}</td>
                <td className={styles['lab-last-day__table-cell']}>{item.valuePH}</td>
                <td className={styles['lab-last-day__table-cell']}>{item.valueSUM}</td>
                <td className={styles['lab-last-day__table-cell']}>
                  <button className={styles['lab-last-day__delete-btn']} onClick={() => handleDeleteClick(item)}>
                    <FaTrash />
                    <span>Удалить</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        onSuccess={confirmDelete}
        isDeleting={isDeleting}
      />
    </>
  );
}
