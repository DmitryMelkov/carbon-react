import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.scss';
import FurnanceCarbonizationCurrent from '../../components/FurnanceCarbonization/FurnanceCarbonizationCurrent';
import DryerCurrent from '../../components/Dryer/DryerCurrent';
import BtnDefault from '../../components/BtnDefault/BtnDefault';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active primary tab
  const primaryTab = (() => {
    if (location.pathname.startsWith('/pc1')) return 'pc1';
    if (location.pathname.startsWith('/pc2')) return 'pc2';
    if (location.pathname.startsWith('/dryer1')) return 'dryer1';
    if (location.pathname.startsWith('/dryer2')) return 'dryer2';
    return 'pc1'; // Default to PC1
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
    <div className={`${styles['tabs__container']}`}>
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
            backgroundColor: 'green', // Цвет индикатора
          },
        }}
      >
        <Tab label="ПК №1" value="pc1" />
        <Tab label="ПК №2" value="pc2" />
        <Tab label="Сушилка №1" value="dryer1" />
        <Tab label="Сушилка №2" value="dryer2" />
      </Tabs>

      {/* Sub-Tabs */}
      <div className={`${styles['tabs__sub-btns']}`}>
        <BtnDefault isActive={subTab === 'current'} onClick={() => handleSubChange('current')}>
          Текущие параметры
        </BtnDefault>
        <BtnDefault isActive={subTab === 'mnemo'} onClick={() => handleSubChange('mnemo')}>
          Мнемосхема
        </BtnDefault>
      </div>

      {/* Routes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location}>
            <Route
              path="/pc1/current"
              element={
                <FurnanceCarbonizationCurrent url="http://localhost:3002/api/vr1-data" title="Печь Карбонизации №1" />
              }
            />
            <Route
              path="/pc2/current"
              element={
                <FurnanceCarbonizationCurrent url="http://localhost:3002/api/vr2-data" title="Печь Карбонизации №2" />
              }
            />
            <Route
              path="/dryer1/current"
              element={<DryerCurrent url="http://localhost:3002/api/sushilka1-data" title="Сушилка №1" />}
            />
            <Route
              path="/dryer2/current"
              element={<DryerCurrent url="http://localhost:3002/api/sushilka2-data" title="Сушилка №2" />}
            />
            <Route path="/:object/mnemo" element={<div>Мнемосхема {location.pathname.split('/')[1]}</div>} />
            <Route path="*" element={<Navigate to="/pc1/current" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
