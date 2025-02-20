import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.sass';
import '@fontsource/roboto/500.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
