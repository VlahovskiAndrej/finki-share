import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";
import useAuthStatus from "../hooks/useAuthStatus";

export default function NavigationBar(){

    const { isLoggedIn, username } = useAuthStatus();

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'black' }}>FINKIShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/select" style={{ color: 'black' }}>Избери предмет</Nav.Link>
                        <Nav.Link href="/materials" style={{ color: 'black' }}>Материјали</Nav.Link>
                        <Nav.Link href="/register" style={{ color: 'black' }}>Регистрирај се</Nav.Link>
                        {isLoggedIn ?
                            (<a href="http://localhost:8080/logout" style={{ color: 'red' }}>{username} - Logout</a>) :
                            (<Nav.Link href="http://localhost:8080/login" style={{ color: 'black' }}>Најави се</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}