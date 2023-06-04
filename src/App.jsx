
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Navbar/Menu';
import {Home, Catalogos, Contacto} from './pages';


function App() {
  return (
    <div className="App">
      <h1>Bienvenido a nuestra tienda en Linea!</h1>

      <Home />
      <Menu/>
      
      <Catalogos />
      <Contacto />
      
    </div>
  );
}

export default App;

