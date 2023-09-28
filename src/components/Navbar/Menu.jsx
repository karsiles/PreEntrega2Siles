import React,{useState} from 'react';
import logo from '../imagen/logo.png'
import CartWidget from '../containers';
import ItemListContainer from '../containers';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
  
    const categorias =['Combos','LineaContemporanea','LineaNuit','Especiales','Bazar'];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleClick = (categorias) => {
      console.log ('Categoria seleccionada: ${categoria}');
      setCategoriaSeleccionada(categorias);

    };
    
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Essen en familia</Navbar.Brand>
          <img src={logo} alt="Logo" className="logo"/>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#catalogo">Catalogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      <Container>
        <ul>
          {categorias.map ((categoria, index) =>(
            <li key ={index} onClick={()=> handleClick (categoria)}>
              {categoria}
            </li>
          ))}
        </ul>
      </Container>
      
    </>
  );
}

export default Menu;