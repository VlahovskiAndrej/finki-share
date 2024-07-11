import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Navigation.module.css'
import useAuthStatus from "../../hooks/useAuthStatus";


export default function Navigation() {

    const {isLoggedIn, username} = useAuthStatus();

    let navigate = useNavigate();

    function routeChange() {
        let path = '/';
        navigate(path);
    }

    function MouseOver(event) {
        event.target.style.color = 'white';
        event.target.style.backgroundColor = '#814A35';
        event.target.style.borderRadius = '40em';
    }

    function MouseOut(event) {
        event.target.style.color = 'black';
        event.target.style.backgroundColor = 'white';
    }

    return (
        <Navbar expand="lg">
            <Container>

                <img src='/images/finkilogo.png ' style={{width: '5%', height: '5%'}} onClick={routeChange}/>
                <Navbar.Brand href="/" style={{color: 'white'}}>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginInlineStart: 'auto'}}>
                        <Nav.Link
                            className={styles.custombutton}
                            href="/select"
                            onMouseOver={MouseOver}
                            onMouseOut={MouseOut}
                        >
                            Избери предмет
                        </Nav.Link>

                        <Nav.Link href="/materials"
                                  className={styles.custombutton}
                                  onMouseOver={MouseOver}
                                  onMouseOut={MouseOut}
                        >
                            Материјали
                        </Nav.Link>
                        <Nav.Link href="/register"
                                  className={styles.custombutton}
                                  onMouseOver={MouseOver}
                                  onMouseOut={MouseOut}
                        >
                            Регистрирај се
                        </Nav.Link>

                        {/*/!*<Nav.Link href="/login"*!/*/}
                        {/*/!*          className={styles.custombutton}*!/*/}
                        {/*/!*          onMouseOver={MouseOver}*!/*/}
                        {/*/!*          onMouseOut={MouseOut}*!/*/}
                        {/*/!*>*!/*/}
                        {/*/!*    Најави се*!/*/}
                        {/*</Nav.Link>*/}

                        {isLoggedIn ?
                            (<Nav.Link href="http://localhost:8080/logout" style={{color: 'red'}}>{username} - Logout</Nav.Link>) :
                            (<Nav.Link href="http://localhost:8080/login" style={{color: 'black'}}>Најави се</Nav.Link>)
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}