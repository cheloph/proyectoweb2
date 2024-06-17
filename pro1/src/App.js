import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Inicio from './components/Inicio';
import Juegos from './components/Juegos';
import Consolas from './components/Consolas';
import Novedades from './components/Novedades';
import Contactos from './components/Contactos';
import Navbarprim from './layouts/Navbarprim';
import Footer1 from './layouts/Footer1';
import Creditos from './components/Creditos';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbarprim/>}>
              <Route index element={<Inicio/>}/>
              <Route path='Juegos' element={<Juegos/>}/>
              <Route path='Consolas' element={<Consolas/>}/>
              <Route path='Novedades' element={<Novedades/>}/>
              <Route path='Contactos' element={<Contactos/>}/>
              <Route path='Creditos' element={<Creditos/>}/>
              <Route path='*' element={<Navigate replace to="/"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer1/>
    </div>
  );
}

export default App;
