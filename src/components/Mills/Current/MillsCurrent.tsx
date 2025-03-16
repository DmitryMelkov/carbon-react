import React from 'react';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import Loader from '../../../ui/loader/Loader';
import { useFetchData } from '../../../hooks/useFetchData';
import { mill1, mill2, mill10b } from '../../../types/millsDataTypes';
import styles from './MillsCurrent.module.scss';

const MillsCurrent: React.FC = () => {
  const { loading: loadingMill1, data: dataMill1 } = useFetchData<mill1>('mill1-data');
  const { loading: loadingMill2, data: dataMill2 } = useFetchData<mill2>('mill2-data');
  const { loading: loadingMill10b, data: dataMill10b } = useFetchData<mill10b>('mill10b-data');

  if (loadingMill1 || loadingMill2 || loadingMill10b) {
    return <Loader />;
  }

  if (!dataMill1 || !dataMill2 || !dataMill10b) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['mills-current']}>
      <TableHeader title="Мельницы" />

      <div className={styles['tables']}>
        <table className={styles['mill__table']}>
          <caption className={styles['mill__title']}>Текущие параметры вибрации мельниц (мм/с) У.П. к.10б</caption>
          <thead className={styles['mill__table-head']}>
            <tr className={styles['mill__table-row']}>
              <th className={styles['mill__table-header']} colSpan={3}>
                Мельница ШБМ №3
              </th>
              <th className={styles['mill__table-header']} colSpan={3}>
                Мельница YGM-9517
              </th>
              <th className={styles['mill__table-header']} colSpan={3}>
                Мельница YCVOK-130
              </th>
            </tr>
          </thead>
          <tbody className={styles['mill__table-body']}>
            <tr className={styles['mill__table-row--header']}>
              <td className={styles['mill__table-cell']}>Осевое</td>
              <td className={styles['mill__table-cell']}>Вертикальное</td>
              <td className={styles['mill__table-cell']}>Поперечное</td>
              <td className={styles['mill__table-cell']}>Фронтальное</td>
              <td className={styles['mill__table-cell']}>Осевое</td>
              <td className={styles['mill__table-cell']}>Поперечное</td>
              <td className={styles['mill__table-cell']}>Фронтальное</td>
              <td className={styles['mill__table-cell']}>Поперечное</td>
              <td className={styles['mill__table-cell']}>Осевое</td>
            </tr>
            <tr className={styles['mill__table-row']}>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>{dataMill10b.data['Осевое ШБМ3']}</td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Вертикальное ШБМ3']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Поперечное ШБМ3']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Фронтальное YGM9517']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Осевое YGM9517']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Поперечное YGM9517']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Фронтальное YCVOK130']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Поперечное YCVOK130']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill10b.data['Осевое YCVOK130']}
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles['mill__table']}>
          <caption className={styles['mill__title']}>Текущие параметры вибрации мельниц (мм/с) У.П. к.10б</caption>
          <thead className={styles['mill__table-head']}>
            <tr className={styles['mill__table-row']}>
              <th className={styles['mill__table-header']} colSpan={3}>
                Мельница №1
              </th>
              <th className={styles['mill__table-header']} colSpan={3}>
                Мельница №2
              </th>
            </tr>
          </thead>
          <tbody className={styles['mill__table-body']}>
            <tr className={styles['mill__table-row--header']}>
              <td className={styles['mill__table-cell']}>Фронтальное</td>
              <td className={styles['mill__table-cell']}>Осевое</td>
              <td className={styles['mill__table-cell']}>Поперечное</td>
              <td className={styles['mill__table-cell']}>Фронтальное</td>
              <td className={styles['mill__table-cell']}>Поперечное</td>
              <td className={styles['mill__table-cell']}>Осевое</td>
            </tr>
            <tr className={styles['mill__table-row']}>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill1.data['Фронтальное Мельница 1']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill1.data['Поперечное Мельница 1']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill1.data['Осевое Мельница 1']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill2.data['Фронтальное Мельница 2']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill2.data['Поперечное Мельница 2']}
              </td>
              <td className={`${styles['mill__table-cell']} ${styles['value']}`}>
                {dataMill2.data['Осевое Мельница 2']}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MillsCurrent;
