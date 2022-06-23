import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import RoutePage from './routes/RoutePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutePage />
  </React.StrictMode>
);

