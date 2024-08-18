import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';
import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Navigation.module.css'
import useAuthStatus from "../../hooks/useAuthStatus";


const Navigation = ({isNavigationWhite}) => {
    const {isLoggedIn, username, user} = useAuthStatus();
    console.log(user)
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    const handleMouseOver = (event) => {
        // event.target.classList.add(classes.customButton);
        event.target.style.color = '#FFFFFF';
        event.target.style.backgroundColor = '#814A35';
        event.target.style.borderRadius = '40em';
    };

    const handleMouseOut = (event) => {
        // event.target.classList.remove(classes.customButton);
        // if (isNavigationWhite) {
        //     event.target.classList.add(classes.customButtonWhite);
        // } else {
        //     event.target.classList.add(classes.customButton);
        // }
        event.target.style.color = '#818181';
        event.target.style.backgroundColor = isNavigationWhite ? '#FFFFFF' : '#DBD2CB'
    };

    return (
        <Navbar expand="lg">
            <Container>
                <img alt='/' src='/images/finkilogo.png ' className={classes.logo} onClick={routeChange}/>
                <Navbar.Brand href="/" className={classes.navbarBrand}>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={classes.navbarNav}>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/subjects"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Избери предмет
                        </Nav.Link>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/materials"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Материјали
                        </Nav.Link>
                        <Nav.Link
                            className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                            href="/registerUI"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            Регистрирај се
                        </Nav.Link>

                        {isLoggedIn ?
                            (<Nav.Link href="http://localhost:8080/logout" className={classes.logoutLink}>
                                {username}
                                <img style={{borderRadius: "15px", marginLeft: "10px" }} width="30px" src={user.avatarUrl} alt="slika.jpg"/>
                            </Nav.Link>)
                            :
                            (<Nav.Link href="/loginUI"
                                       className={isNavigationWhite ? classes.customButtonWhite : classes.customButton}
                                       onMouseOver={handleMouseOver}
                                       onMouseOut={handleMouseOut}>Најави се</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;