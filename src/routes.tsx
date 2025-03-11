import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonizationCurrentPage/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/DryerCurrentPage/DryerCurrentPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/pc1/current"
        element={<FurnanceCarbonizationCurrentPage url="http://localhost:3002/api/vr1-data" title="Печь Карбонизации №1" />}
      />
      <Route
        path="/pc2/current"
        element={<FurnanceCarbonizationCurrentPage url="http://localhost:3002/api/vr2-data" title="Печь Карбонизации №2" />}
      />
      <Route
        path="/dryer1/current"
        element={<DryerCurrentPage url="http://localhost:3002/api/sushilka1-data" title="Сушилка №1" />}
      />
      <Route
        path="/dryer2/current"
        element={<DryerCurrentPage url="http://localhost:3002/api/sushilka2-data" title="Сушилка №2" />}
      />
    </Routes>
  );
};

export default AppRoutes;