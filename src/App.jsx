import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/Menu'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Home, Catalogos, Contacto } from "./pages";	

function App() {
  const [page, setPage] = useState("Home")
  return (
    <div className="App">
      <p>todo lo que necesitas para tu cocina, conseguilo aca! 
     
      </p>
      <NavbarComponent onChangePage={setPage}/> 
      <ItemListContainer greetings="Bienvenidos"/>
      <nav>
        <ul>
          <li>
            <button onClick ={() => setPage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage("catalogo")}>Catalogo</button>
          </li>
          <li>
            <button onClick={() => setPage("contacto")}>contacto</button>
          </li>
        </ul>
      </nav>

      
      
      {page === "Home" && <Home />}
      {page === "Catalogo" && <Catalogos />} 
      {page === "Contacto" && <Contacto />}
    </div>
  );
}

export default App;


