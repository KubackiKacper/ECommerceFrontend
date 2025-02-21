import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import CartButton from './CartButton'


const NavBar = () => {
  
  return (
    <NavbarBs sticky='top' className='navbar_container'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        <CartButton/>  
      </Container>
    </NavbarBs>
  )
}

export default NavBar