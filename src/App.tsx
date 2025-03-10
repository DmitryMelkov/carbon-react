import React, { useState } from 'react';
import TabBtns from './components/Tabs/TabBtns';
import TabPC from './components/Tabs/TabPC';
import TabSushilka from './components/Tabs/TabSushilka';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [tab, setTab] = useState<string>('ПК1');

  return (
    <div className="container">
      <div className={styles['tab']}>
        <TabBtns active={tab} onChange={(current: string) => setTab(current)} />

        {tab === 'ПК1' && (
          <div className={styles['tab__content']}>
            <TabPC url={'http://169.254.0.156:3002/api/vr1-data'} title={'ПК №1'} />
          </div>
        )}

        {tab === 'ПК2' && (
          <div className={styles['tab__content']}>
            <TabPC url={'http://169.254.0.156:3002/api/vr2-data'} title={'ПК №2'} />
          </div>
        )}

        {tab === 'Сушилка1' && (
          <div className={styles['tab__content']}>
            <TabSushilka url={'http://169.254.0.156:3002/api/sushilka1-data'} title={'Сушилка №1'} />
          </div>
        )}

        {tab === 'Сушилка2' && (
          <div className={styles['tab__content']}>
            <TabSushilka url={'http://169.254.0.156:3002/api/sushilka2-data'} title={'Сушилка №2'} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
