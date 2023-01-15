import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Desarrollo from './pages/DesarrolloWeb/Desarrollo';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error from './pages/Error/Error';

import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path="/cursos" element={ <ItemListContainer /> } />
        <Route path='/' element={<Home />} />
        <Route path='desarrollo' element={<Desarrollo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
