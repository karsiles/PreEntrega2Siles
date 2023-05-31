
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/Menu';
import {Home, Catalogos, Contacto} from './pages';


function App() {
  return (
    <div className="App">
      <Home />
      <Catalogos />
      <Contacto />
      
    </div>
  );
}

export default App;

