import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainView from './app/MainView';

//Redirecciona al Html!
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainView/>
  </React.StrictMode>
);


reportWebVitals();
