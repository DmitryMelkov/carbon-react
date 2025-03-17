import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.scss';
import AppRoutes from '../../routes';
import BtnDefault from '../../ui/BtnDefault/BtnDefault';
import { MdConstruction, MdTune, MdBarChart } from 'react-icons/md';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Определите активную основную вкладку
  const primaryTab = (() => {
    if (location.pathname.startsWith('/pc/1')) return 'pc/1';
    if (location.pathname.startsWith('/pc/2')) return 'pc/2';
    if (location.pathname.startsWith('/dryer/1')) return 'dryer/1';
    if (location.pathname.startsWith('/dryer/2')) return 'dryer/2';
    if (location.pathname.startsWith('/mpa/2')) return 'mpa/2';
    if (location.pathname.startsWith('/mpa/3')) return 'mpa/3';
    if (location.pathname.startsWith('/mills')) return 'mills';
    if (location.pathname.startsWith('/reactorK296')) return 'reactorK296';
    if (location.pathname.startsWith('/energyResources')) return 'energyResources';
    return 'pc/1'; // По умолчанию ПК1
  })();

  // Определите активную подвкладку
  const subTab = (() => {
    if (location.pathname.includes('mnemo')) return 'mnemo';
    if (location.pathname.includes('chart-temper')) return 'chart-temper';
    if (location.pathname.includes('chart-pressure')) return 'chart-pressure';
    if (location.pathname.includes('chart-level')) return 'chart-level';
    if (location.pathname.includes('chart-notis')) return 'chart-notis';
    if (location.pathname.includes('chart-general')) return 'chart-general';
    if (location.pathname.includes('chart-mill')) return 'chart-mill1';
    if (location.pathname.includes('chart-mill')) return 'chart-mill2';
    if (location.pathname.includes('chart-millsbm3')) return 'chart-millsbm3';
    if (location.pathname.includes('chart-millygm9517')) return 'chart-millygm9517';
    if (location.pathname.includes('chart-millycvok130')) return 'chart-millycvok130';
    if (location.pathname.includes('chart-reactorK296')) return 'chart-reactorK296';
    if (location.pathname.includes('chart-energyResources')) return 'chart-energyResources';

    return 'current';
  })();

  // Обработка изменения основной вкладки
  const handlePrimaryChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(`/${newValue}/current`);
  };

  // Обработка изменения подвкладки
  const handleSubChange = (newValue: string) => {
    navigate(`/${primaryTab}/${newValue}`);
  };

  return (
    <div className={`${styles['home']}`}>
      <div className={`${styles['home__container']}`}>
        {/* Основные вкладки */}
        <Tabs
          value={primaryTab}
          onChange={handlePrimaryChange}
          sx={{
            '& .MuiTab-root': {
              fontSize: '20px',
              lineHeight: '20px',
              fontWeight: '600',
              color: 'green',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'green',
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'green',
            },
          }}
        >
          <Tab label="ПК №1" value="pc/1" />
          <Tab label="ПК №2" value="pc/2" />
          <Tab label="Сушилка №1" value="dryer/1" />
          <Tab label="Сушилка №2" value="dryer/2" />
          <Tab label="МПА №2" value="mpa/2" />
          <Tab label="МПА №3" value="mpa/3" />
          <Tab label="Мельницы" value="mills" />
          <Tab label="Смоляные реактора" value="reactorK296" />
          <Tab label="Узлы учета" value="energyResources" />
        </Tabs>

        <div className={`${styles['home__intro']}`}>
          {/* Подвкладки */}
          <div className={`${styles['home__sub-btns']}`}>
            <BtnDefault
              isActive={subTab === 'current'}
              onClick={() => handleSubChange('current')}
              icon={<MdTune />}
              iconSize="20px"
            >
              Текущие параметры
            </BtnDefault>
            {primaryTab.startsWith('dryer') && (
              <>
                <BtnDefault
                  isActive={subTab === 'mnemo'}
                  onClick={() => handleSubChange('mnemo')}
                  icon={<MdConstruction />}
                  iconSize="20px"
                >
                  Мнемосхема
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-temper'}
                  onClick={() => handleSubChange('chart-temper')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики температур
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-pressure'}
                  onClick={() => handleSubChange('chart-pressure')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики давления
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-general'}
                  onClick={() => handleSubChange('chart-general')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Общие графики
                </BtnDefault>
              </>
            )}
            {primaryTab.startsWith('mpa') && (
              <>
                <BtnDefault
                  isActive={subTab === 'mnemo'}
                  onClick={() => handleSubChange('mnemo')}
                  icon={<MdConstruction />}
                  iconSize="20px"
                >
                  Мнемосхема
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-temper'}
                  onClick={() => handleSubChange('chart-temper')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики температур
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-pressure'}
                  onClick={() => handleSubChange('chart-pressure')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики давления
                </BtnDefault>
              </>
            )}
            {primaryTab.startsWith('pc') && (
              <>
                <BtnDefault
                  isActive={subTab === 'mnemo'}
                  onClick={() => handleSubChange('mnemo')}
                  icon={<MdConstruction />}
                  iconSize="20px"
                >
                  Мнемосхема
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-temper'}
                  onClick={() => handleSubChange('chart-temper')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики температур
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-pressure'}
                  onClick={() => handleSubChange('chart-pressure')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики давления
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-level'}
                  onClick={() => handleSubChange('chart-level')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики уровня
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-notis'}
                  onClick={() => handleSubChange('chart-notis')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики дозатора Нотис
                </BtnDefault>
              </>
            )}
            {primaryTab.startsWith('mills') && (
              <>
                <BtnDefault
                  isActive={subTab === 'chart-mill1'}
                  onClick={() => handleSubChange('chart-mill1')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики мельницы №1
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-mill2'}
                  onClick={() => handleSubChange('chart-mill2')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики мельницы №2
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-millsbm3'}
                  onClick={() => handleSubChange('chart-millsbm3')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики ШБМ №3
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-millygm9517'}
                  onClick={() => handleSubChange('chart-millygm9517')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики YGM-9517
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-millycvok130'}
                  onClick={() => handleSubChange('chart-millycvok130')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики YCVOK-130
                </BtnDefault>
              </>
            )}
            {primaryTab.startsWith('reactorK296') && (
              <>
                <BtnDefault
                  isActive={subTab === 'mnemo'}
                  onClick={() => handleSubChange('mnemo')}
                  icon={<MdConstruction />}
                  iconSize="20px"
                >
                  Мнемосхема
                </BtnDefault>
                <BtnDefault
                  isActive={subTab === 'chart-reactorK296'}
                  onClick={() => handleSubChange('chart-reactorK296')}
                  icon={<MdBarChart />}
                  iconSize="20px"
                >
                  Графики объекта
                </BtnDefault>
              </>
            )}
            {primaryTab.startsWith('energyResources') && (
              <BtnDefault
                isActive={subTab === 'chart-energyResources'}
                onClick={() => handleSubChange('chart-energyResources')}
                icon={<MdBarChart />}
                iconSize="20px"
              >
                Графики объекта
              </BtnDefault>
            )}
          </div>

          {/* Маршруты */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${location.key}-${location.pathname}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AppRoutes />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
