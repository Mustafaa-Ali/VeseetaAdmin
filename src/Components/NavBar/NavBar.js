
import React, { useContext, useState } from 'react';
// import Link from '../Link/link';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { langContext } from '../../contexts/lang';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/whitelogowithdotcom.png'
const NavBar = () => {

    const { lang, setLang } = useContext(langContext);


    const handleChange = () => {

        setLang(lang == 'en' ? 'ar' : 'en')
    }

    return (<>
        <section className=''>
            <Navbar className='fixed-top' expand="lg" style={{background:`radial-gradient(circle, rgb(11, 109, 227) 0%, rgb(22, 103, 201) 0%, rgb(2, 76, 167) 90%)`,color:"white"}}>
                <Container style={{color:"white"}}>
                    <Navbar.Brand to="/home"><img src={logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </section>
    </>
    )
}


export default NavBar;