import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/MainView';
import reportWebVitals from './reportWebVitals';

//Redirecciona al Html!
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
