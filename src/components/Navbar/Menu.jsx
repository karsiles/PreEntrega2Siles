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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#catalogo">Catalogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Menu;