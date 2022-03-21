import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../actions/actionLogin';

const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }
  return (
    <header className='position-sticky top-0 navBar'>
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1646020505/Pokemon/Pok%C3%A9_Ball_icon.svg_xfnnva.png" alt="pokemon-logo" width={40} />
                    <h3 className='ms-2 my-2'>Pokedex</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link eventKey={2} href="#">
                            <Button variant='danger' onClick={() => handleLogout()}>Logout</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default NavBar