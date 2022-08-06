import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/MainView';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Redirecciona al Html!
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* No sabemos si vamos a utilizar el router en este sector de codigo, se utilizaria en el
    MainView, Esto esta echho en modo  de ejemplo.*/}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} exact></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
