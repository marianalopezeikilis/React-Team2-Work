import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Mamiferos from "./components/Mamiferos.js";
import Aves from "./components/Aves.js";
import Peces from "./components/Peces.js";
import Reptiles from "./components/Reptiles.js";
import Anfibios from "./components/Anfibios.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}>
        <Route path="Mamiferos" element={<Mamiferos />} />
        <Route path="Aves" element={<Aves />} />
        <Route path="Peces" element={<Peces />} />
        <Route path="Reptiles" element={<Reptiles />} />
        <Route path="Anfibios" element={<Anfibios />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
