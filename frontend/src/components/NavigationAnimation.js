import './NavigationAnimation.module.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavigationAnimation(){
//     return (
//         <Navbar expand="lg">
//             <ul>
//                 <li>
//                     <a href="#">
//                         {/*<i className="fab fa-edge">A</i>*/}
//                         Избери Предмет
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         Избери Предмет
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         Избери Предмет
//                     </a>
//
//                 </li>
//                 <li>
//                     <a href="#">
//                         Избери Предмет
//                     </a>
//                 </li>
//             </ul>
//         </Navbar>
//     );
// }



function NavigationAnimation(){
    return (
        <Navbar expand="lg" >
            {/*ul*/}
            <Container>
                <Navbar.Brand href="/" style={{color: 'white'}}>FINKIShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>*/}
                        {/*  a   */}
                        <Nav.Link href="/select"  style={{color: 'white'}}>Избери предмет</Nav.Link>
                        <Nav.Link href="/materials"  style={{color: 'white'}}>Материјали</Nav.Link>
                        <Nav.Link href="/login"  style={{color: 'white'}}>Најави се</Nav.Link>
                        {/*<NavDropdown  title="Dropdown" id="basic-nav-dropdown" style={{ color: 'white' }}>*/}
                        {/*    Dropdown*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationAnimation;