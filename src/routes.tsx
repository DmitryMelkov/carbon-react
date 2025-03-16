import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonizationCurrentPage/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/DryerCurrentPage/DryerCurrentPage';
import FurnanceCarbonizationMnemoPage from './pages/FurnanceCarbonizationMnemoPage/FurnanceCarbonizationMnemoPage';
import DryerMnemoPage from './pages/DryerMnemoPage/DryerMnemoPage';
import FurnanceActivationCurrentPage from './pages/FurnanceActivationCurrentPage/FurnanceCarbonizationCurrentPage';
import FurnanceActivationMnemoPage from './pages/FurnanceActivationMnemoPage/FurnanceCarbonizationMnemoPage';
import MillsCurrentPage from './pages/MillsCurrentPage/MillsCurrentPage';
import ReactorK296CurrentPage from './pages/ReactorK296CurrentPage/ReactorK296CurrentPage';
import ReactorK296MnemoPage from './pages/ReactorK296MnemoPage/ReactorK296MnemoPage';
import EnergyResourcesCurrentPage from './pages/EnergyResourcesCurrentPage/EnergyResourcesCurrentPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/pc/:id/current" element={<FurnanceCarbonizationCurrentPage />} />
      <Route path="/pc/:id/mnemo" element={<FurnanceCarbonizationMnemoPage />} />
      <Route path="/dryer/:id/current" element={<DryerCurrentPage />} />
      <Route path="/dryer/:id/mnemo" element={<DryerMnemoPage />} />
      <Route path="/mpa/:id/current" element={<FurnanceActivationCurrentPage />} />
      <Route path="/mpa/:id/mnemo" element={<FurnanceActivationMnemoPage />} />
      <Route path="/mills/current" element={<MillsCurrentPage />} />
      <Route path="/reactorK296/current" element={<ReactorK296CurrentPage />} />
      <Route path="/reactorK296/mnemo" element={<ReactorK296MnemoPage />} />
      <Route path="/energyResources/current" element={<EnergyResourcesCurrentPage />} />

    </Routes>
  );
};

export default AppRoutes;
