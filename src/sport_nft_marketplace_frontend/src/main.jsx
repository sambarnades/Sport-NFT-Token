import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/js/index.umd.js';
import 'bootstrap-icons/font/bootstrap-icons.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
