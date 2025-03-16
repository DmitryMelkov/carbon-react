import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.scss';
import AppRoutes from '../../routes';
import BtnDefault from '../../ui/BtnDefault/BtnDefault';
import { MdConstruction, MdTune } from 'react-icons/md';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active primary tab
  const primaryTab = (() => {
    if (location.pathname.startsWith('/pc/1')) return 'pc/1';
    if (location.pathname.startsWith('/pc/2')) return 'pc/2';
    if (location.pathname.startsWith('/dryer/1')) return 'dryer/1';
    if (location.pathname.startsWith('/dryer/2')) return 'dryer/2';
    if (location.pathname.startsWith('/mpa/2')) return 'mpa/2';
    if (location.pathname.startsWith('/mpa/3')) return 'mpa/3';
    if (location.pathname.startsWith('/mills')) return 'mills';
    if (location.pathname.startsWith('/reactorK296')) return 'reactorK296';

    return 'pc/1'; // Default to PC1
  })();

  // Determine the active sub-tab
  const subTab = (() => {
    if (location.pathname.includes('mnemo')) return 'mnemo';
    return 'current';
  })();

  // Handle primary tab change
  const handlePrimaryChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(`/${newValue}/current`);
  };

  // Handle sub-tab change
  const handleSubChange = (newValue: string) => {
    navigate(`/${primaryTab}/${newValue}`);
  };

  return (
    <div className={`${styles['home']}`}>
      <div className={`${styles['home__container']}`}>

        {/* Primary Tabs */}
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
        </Tabs>

        <div className={`${styles['home__intro']}`}>
          {/* Sub-Tabs */}
          <div className={`${styles['home__sub-btns']}`}>
            <BtnDefault
              isActive={subTab === 'current'}
              onClick={() => handleSubChange('current')}
              icon={<MdTune />}
              iconSize="20px"
            >
              Текущие параметры
            </BtnDefault>
            <BtnDefault
              isActive={subTab === 'mnemo'}
              onClick={() => handleSubChange('mnemo')}
              icon={<MdConstruction />}
              iconSize="20px"
            >
              Мнемосхема
            </BtnDefault>
          </div>

          {/* Routes */}
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
