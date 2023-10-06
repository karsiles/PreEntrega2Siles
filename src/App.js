import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/Menu'; // Corrige la importación del componente Navbar
import { Home, Catalogos, Contacto } from "./pages";	

function App() {
  return (
    <div className="App">
      <p>todo lo que necesitas para tu cocina, conseguilo aca! 
        
      </p>

      <NavbarComponent /> {/* Utiliza el nombre correcto del componente Navbar */}
      
      <Home />
      <Catalogos />
      <Contacto />
    </div>
  );
}

export default App;


