import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/navbar/NavBar';
import Desarrollo from './pages/DesarrolloWeb/Desarrollo';
import Lenguajes from './pages/Lenguajes/Lenguajes';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from './pages/Error/Error';
import Otros from './pages/otros/otros';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path="/cursos" element={ <ItemListContainer /> } />
        <Route path='/' element={<Home />} />
        <Route path='lenguajes' element={<Lenguajes/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
        <Route path='desarrollo' element={<Desarrollo />} />
        <Route path='otros' element={<Otros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
