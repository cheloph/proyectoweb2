import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/img/gamesbky.png'
export default function Navbarprim() {
  return (
    <>
        <Navbar className="navBg" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='logog' src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >inicio</Nav.Link>
                    <Nav.Link as={Link} to="/Juegos" >Juegos</Nav.Link>
                    <Nav.Link as={Link} to="/Consolas" >Consolas</Nav.Link>
                    <Nav.Link as={Link} to="/Novedades" >Novedades</Nav.Link>
                    <Nav.Link as={Link} to="/Contactos" >Contactos</Nav.Link>
                    <Nav.Link as={Link} to="/Creditos" >Creditos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
    </>
  )
}
