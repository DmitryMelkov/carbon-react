import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonizationCurrentPage/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/DryerCurrentPage/DryerCurrentPage';
import FurnanceCarbonizationMnemoPage from './pages/FurnanceCarbonizationMnemoPage/FurnanceCarbonizationMnemoPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/pc/:id/current"
        element={<FurnanceCarbonizationCurrentPage />}
      />
      <Route
        path="/pc/:id/mnemo"
        element={<FurnanceCarbonizationMnemoPage />}
      />
      <Route path="/dryer/:id/current" element={<DryerCurrentPage />} />
    </Routes>
  );
};

export default AppRoutes;
