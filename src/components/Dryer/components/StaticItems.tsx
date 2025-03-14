import styles from '../Mnemo/DryerMnemo.module.scss'

const StaticItems = () => {
  return (
    <>
       <div className={`${styles['mnemo__param-descr']} ${styles['kamera-smeshenia-text']}`}>
          Камера <br /> смешения
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['gaz-text']}`}>
          Газ <br /> природный
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mosh-gorelki-text']}`}>
          Мощность <br /> горелки
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['zadanie-temper-text']}`}>
          Задание <br /> температуры
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['vosduh-na-razbavl-text']}`}>
          Воздух на <br /> разбавление
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['liniya-parotush-text']}`}>
          Линия паротушения
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['baraban-text']}`}>Барабан</div>
        <div className={`${styles['mnemo__param-descr']} ${styles['kamera-vigruzki-text']}`}>
          Выгрузочная <br /> камера
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['dymosos-text']}`}>Дымосос</div>
        <div className={`${styles['mnemo__param-descr']} ${styles['temper-uhodyashih-gazov-text']}`}>
          Температура уходящих <br /> газов
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['topka-text']}`}>Топка</div>
        <div className={`${styles['mnemo__param-descr']} ${styles['pluzdh-sbrasyvatel-text']}`}>
          Плужковый сбрасыватель
        </div>
    </>
  );
};

export default StaticItems;
