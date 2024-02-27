import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";

export default function NavigationBar(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:8080/check-login', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const resultObject = await response.json();
                    if (resultObject["authenticated"]) {
                        setUsername(resultObject["username"]);
                        setIsLoggedIn(resultObject["authenticated"]);
                    } else {
                        setIsLoggedIn(resultObject["authenticated"]);
                    }
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        };
        checkLoginStatus();
    }, []);

    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="/" style={{color: 'black'}}>FINKIShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>*/}
                        <Nav.Link href="/select"  style={{color: 'black'}}>Избери предмет</Nav.Link>
                        <Nav.Link href="/materials"  style={{color: 'black'}}>Материјали</Nav.Link>
                        <Nav.Link href="http://localhost:8080/login"  style={{color: 'black'}}>Регистрирај се</Nav.Link>
                        {isLoggedIn ?
                            (<a href="http://localhost:8080/logout" style={{color: 'red'}}>{username} - Logout</a>) :
                            (<Nav.Link href="http://localhost:8080/login"  style={{color: 'black'}}>Најави се</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}