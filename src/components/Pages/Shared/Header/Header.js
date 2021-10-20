import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (

        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className="logo" src={logo} alt="" />
                    <Navbar.Brand href="#home">Eye Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/branches">Branches</NavLink>
                            <NavLink to="/doctors">Doctors</NavLink>
                            <NavLink to="/contact">Contact</NavLink>

                            {user.email && <span className="text-black  d-flex align-items-center">Hello, {user.displayName}  </span>}

                            {
                                user.email ?
                                    <button onClick={logOut} className="btn btn-success ms-2">Log out</button>
                                    :
                                    <NavLink to="/login">Login</NavLink>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;