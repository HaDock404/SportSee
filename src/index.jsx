import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './styles/normalize.css';
import GlobalStyle from './styles/createGlobalStyle.jsx'

import Header from './pages/Header';
import Home from './pages/HomeX'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <Header/>
        <Routes>
          <Route path="/:id" element={<><Home/></>}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
