import React from 'react';
import NavBar from './components/Menu/NavBar';
import './components/Menu/NavBar.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/paginas/Inicio";
import SobreMi from "./components/paginas/SobreMi";
import Viajes from "./components/paginas/Viajes";
import LenguaDeSeñas from './components/paginas/LenguaDeSeñas';
import './App.css';
import ViajesBariloche from './components/paginas/ViajesFireBase';




export default function App(){
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="paginas/Inicio" element={<Inicio />} />
        <Route path="paginas/SobreMi" element={<SobreMi />} />
        <Route path="paginas/Viajes" element={<Viajes />} />
        <Route path="paginas/ViajesFireBase" element={<ViajesBariloche />} />
        <Route path="paginas/LenguaDeSeñas" element={<LenguaDeSeñas />} />
      </Routes>
    </BrowserRouter>
  )
};
