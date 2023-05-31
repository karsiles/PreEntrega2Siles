import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Madison store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.a href="#home">Home</Nav.a>
            <Nav.a href="#catalogo">Catalogo</Nav.a>
            <Nav.a href="#contacto">Contacto</Nav.a>

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Menu;