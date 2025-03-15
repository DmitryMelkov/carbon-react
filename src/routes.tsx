import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonizationCurrentPage/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/DryerCurrentPage/DryerCurrentPage';
import FurnanceCarbonizationMnemoPage from './pages/FurnanceCarbonizationMnemoPage/FurnanceCarbonizationMnemoPage';
import DryerMnemoPage from './pages/DryerMnemoPage/DryerMnemoPage';
import FurnanceActivationCurrentPage from './pages/FurnanceActivationCurrentPage/FurnanceCarbonizationCurrentPage';
import FurnanceActivationMnemoPage from './pages/FurnanceActivationMnemoPage/FurnanceCarbonizationMnemoPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/pc/:id/current" element={<FurnanceCarbonizationCurrentPage />} />
      <Route path="/pc/:id/mnemo" element={<FurnanceCarbonizationMnemoPage />} />
      <Route path="/dryer/:id/current" element={<DryerCurrentPage />} />
      <Route path="/dryer/:id/mnemo" element={<DryerMnemoPage />} />
      <Route path="/mpa/:id/current" element={<FurnanceActivationCurrentPage />} />
      <Route path="/mpa/:id/mnemo" element={<FurnanceActivationMnemoPage />} />
    </Routes>
  );
};

export default AppRoutes;
