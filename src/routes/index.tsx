import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages';
import React from 'react';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
