import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pc/1/mnemo" />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </Router>
  );
};

export default App;
