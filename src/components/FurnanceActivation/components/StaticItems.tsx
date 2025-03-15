import styles from '../Mnemo/FurnanceActivartionMnemo.module.scss';

const StaticItems = () => {
  return (
    <>
      <div className={`${styles['mnemo__param-descr']} ${styles['regenerator-text']}`}>Регенератор</div>
      <div className={`${styles['mnemo__param-descr']} ${styles['dym-borov-text']}`}>Дымовой боров</div>
    </>
  );
};

export default StaticItems;
