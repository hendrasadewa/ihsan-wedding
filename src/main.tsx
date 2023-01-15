import '@fontsource/playfair-display';
import '@fontsource/rochester';
import "@fontsource/lato";
import 'dayjs/locale/id';

import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';

import App from './App';
import './index.css';

dayjs.locale('id');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
