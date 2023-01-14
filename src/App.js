import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Desarrollo from './pages/DesarrolloWeb/Desarrollo';
import Error from './pages/Error/Error';

import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='desarrollo' element={<Desarrollo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
