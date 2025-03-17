import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonization/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/Dryer/DryerCurrentPage';
import FurnanceCarbonizationMnemoPage from './pages/FurnanceCarbonization/FurnanceCarbonizationMnemoPage';
import DryerMnemoPage from './pages/Dryer/DryerMnemoPage';
import FurnanceActivationCurrentPage from './pages/FurnanceActivation/FurnanceCarbonizationCurrentPage';
import FurnanceActivationMnemoPage from './pages/FurnanceActivation/FurnanceCarbonizationMnemoPage';
import MillsCurrentPage from './pages/Mills/MillsCurrentPage';
import ReactorK296CurrentPage from './pages/ReactorK296/ReactorK296CurrentPage';
import ReactorK296MnemoPage from './pages/ReactorK296/ReactorK296MnemoPage';
import EnergyResourcesCurrentPage from './pages/EnergyResources/EnergyResourcesCurrentPage';
import DryerTemper from './pages/Dryer/Charts/DryerTemper';
import DryerPressure from './pages/Dryer/Charts/DryerPressure';
import DryerGeneral from './pages/Dryer/Charts/DryerGeneral';
import FurnanceActivationTemper from './pages/FurnanceActivation/Charts/FurnanceActivationTemper';
import FurnanceActivationPressure from './pages/FurnanceActivation/Charts/FurnanceActivationPressure';
import FurnanceCarbonizationPressure from './pages/FurnanceCarbonization/Charts/FurnanceCarbonizationPressure';
import FurnanceCarbonizationTemper from './pages/FurnanceCarbonization/Charts/FurnanceCarbonizationTemper';
import FurnanceCarbonizationLevel from './pages/FurnanceCarbonization/Charts/FurnanceCarbonizationlevel';
import FurnanceCarbonizationNotis from './pages/FurnanceCarbonization/Charts/FurnanceCarbonizationNotis';
import Mill from './pages/Mills/Charts/Mill';
import Millsbm3 from './pages/Mills/Charts/Millsbm3';
import MillYGM9517 from './pages/Mills/Charts/MillYGM9517';
import MillYCVOK130 from './pages/Mills/Charts/MillYCVOK130';
import ReactorK296 from './pages/ReactorK296/Charts/ReactorK296';
import EnergyResources from './pages/EnergyResources/Charts/EnergyResources';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/pc/:id/current" element={<FurnanceCarbonizationCurrentPage />} />
      <Route path="/pc/:id/mnemo" element={<FurnanceCarbonizationMnemoPage />} />
      <Route path="/pc/:id/chart-temper" element={<FurnanceCarbonizationTemper />} />
      <Route path="/pc/:id/chart-pressure" element={<FurnanceCarbonizationPressure />} />
      <Route path="/pc/:id/chart-level" element={<FurnanceCarbonizationLevel />} />
      <Route path="/pc/:id/chart-notis" element={<FurnanceCarbonizationNotis />} />
      <Route path="/dryer/:id/current" element={<DryerCurrentPage />} />
      <Route path="/dryer/:id/mnemo" element={<DryerMnemoPage />} />
      <Route path="/dryer/:id/chart-temper" element={<DryerTemper />} />
      <Route path="/dryer/:id/chart-pressure" element={<DryerPressure />} />
      <Route path="/dryer/:id/chart-general" element={<DryerGeneral />} />
      <Route path="/mpa/:id/current" element={<FurnanceActivationCurrentPage />} />
      <Route path="/mpa/:id/mnemo" element={<FurnanceActivationMnemoPage />} />
      <Route path="/mpa/:id/chart-temper" element={<FurnanceActivationTemper />} />
      <Route path="/mpa/:id/chart-pressure" element={<FurnanceActivationPressure />} />
      <Route path="/mills/current" element={<MillsCurrentPage />} />
      <Route path="/mills/chart-mill1" element={<Mill id="1" title="График вибрации Мельница №1" />} />
      <Route path="/mills/chart-mill2" element={<Mill id="2" title="График вибрации Мельница №2" />} />
      <Route path="/mills/chart-millsbm3" element={<Millsbm3 />} />
      <Route path="/mills/chart-millygm9517" element={<MillYGM9517 />} />
      <Route path="/mills/chart-millycvok130" element={<MillYCVOK130 />} />
      <Route path="/reactorK296/current" element={<ReactorK296CurrentPage />} />
      <Route path="/reactorK296/mnemo" element={<ReactorK296MnemoPage />} />
      <Route path="/reactorK296/chart-reactorK296" element={<ReactorK296 />} />
      <Route path="/energyResources/current" element={<EnergyResourcesCurrentPage />} />
      <Route path="/energyResources/chart-energyResources" element={<EnergyResources />} />

    </Routes>
  );
};

export default AppRoutes;
