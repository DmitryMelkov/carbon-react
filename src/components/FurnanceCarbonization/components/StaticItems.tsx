import styles from '../FurnanceCarbonizationMnemo.module.scss'

const StaticItems = () => {
  return (
    <>
      <div className={`${styles['mnemo__param-descr']} ${styles['ot-hvo-text']}`}>От ХВО</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['avarini-sbros-text']}`}>Аварийный сброс</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['par-v-otdelenii-activatsi-text']}`}>
        Пар в отделении активации
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['borov-soedinitelni-text']}`}>Боров соединительный</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['pech-doziga-gazov-text']}`}>Печь дожига газов</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['dymosos-text']}`}>Дымосос</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['kotel-utilizator-text']}`}>Котел утилизатор</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vyhod-dymovyh-gazov-text']}`}>Выход дымовых газов</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['mokriy-skruber-text']}`}>Мокрый скруббер</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['topka-text']}`}>Топка</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vanna-skrubbera-text']}`}>Ванна скруббера</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['goriz-vibrotransporter-text']}`}>
        Вертикальный вибротранспортер
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vr-pech-carboniz-text']}`}>
        Вращающаяся печь карбонизации
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['hvo-text']}`}>ХВО</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['holodilnik-text']}`}>Холодильник</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['grohot-text']}`}>Грохот</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['elevator-text']}`}>Элеватор</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['zagruzka-granul-text']}`}>Загрузка гранул</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['niz-zagr-kam-text']}`}>Низ загрузочной камеры</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vigruzka-kam-text']}`}>Камера выгрузки</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vniz-kamery-zagruzki-text']}`}>
        Внизу камеры загрузки
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vverh-kamery-zagruzki-text']}`}>
        Вверху камеры загрузки
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vhod-pechi-doziganiy-text']}`}>
        Вход печи дожигания
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['vyhod-pechi-doziganiy-text']}`}>
        Выход печи дожигания
      </div>
      <div className={`${styles['mnemo__param-descr']} ${styles['zadanie-temper-na-gorelky-text']}`}>Задание</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['first-skolz-text']}`}>1-СК</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['second-skolz-text']}`}>2-СК</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['third-skolz-text']}`}>3-СК</div>
    </>
  );
};

export default StaticItems;
