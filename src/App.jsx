
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar/NavBar';
import Menu from "../../components/Navbar/NavBar";

import { Home,Catalogos,Contacto } from "./pages";

function App() {
  return (
    <div className="App">
      
      <Home />
      <Catalogos />
      <Contacto />
      <Menu />
    </div>
  );
}

export default App;
