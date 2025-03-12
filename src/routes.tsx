import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FurnanceCarbonizationCurrentPage from './pages/FurnanceCarbonizationCurrentPage/FurnanceCarbonizationCurrentPage';
import DryerCurrentPage from './pages/DryerCurrentPage/DryerCurrentPage';
import FurnanceCarbonizationMnemoPage from './pages/FurnanceCarbonizationMnemoPage/FurnanceCarbonizationMnemoPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/pc1/current"
        element={
          <FurnanceCarbonizationCurrentPage
            url="http://localhost:3002/api/vr1-data"
            title="Печь Карбонизации №1"
            key={`pc1-current-${"http://localhost:3002/api/vr1-data"}`}
          />
        }
      />
      <Route
        path="/pc1/mnemo"
        element={
          <FurnanceCarbonizationMnemoPage
            url="http://localhost:3002/api/vr1-data"
            title="Печь Карбонизации №1"
            key={`pc1-mnemo-${"http://localhost:3002/api/vr1-data"}`}
          />
        }
      />
      <Route
        path="/pc2/current"
        element={
          <FurnanceCarbonizationCurrentPage
            url="http://localhost:3002/api/vr2-data"
            title="Печь Карбонизации №2"
            key={`pc2-current-${"http://localhost:3002/api/vr2-data"}`}
          />
        }
      />
      <Route
        path="/pc2/mnemo"
        element={
          <FurnanceCarbonizationMnemoPage
            url="http://localhost:3002/api/vr2-data"
            title="Печь Карбонизации №2"
            key={`pc2-mnemo-${"http://localhost:3002/api/vr2-data"}`}
          />
        }
      />
      <Route
        path="/dryer1/current"
        element={
          <DryerCurrentPage
            url="http://localhost:3002/api/sushilka1-data"
            title="Сушилка №1"
            key={`dryer1-current-${"http://localhost:3002/api/sushilka1-data"}`}
          />
        }
      />
      <Route
        path="/dryer2/current"
        element={
          <DryerCurrentPage
            url="http://localhost:3002/api/sushilka2-data"
            title="Сушилка №2"
            key={`dryer2-current-${"http://localhost:3002/api/sushilka2-data"}`}
          />
        }
      />
    </Routes>
  );
};


export default AppRoutes;
