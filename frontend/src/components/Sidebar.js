import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Sidebar.module.css'; // Import CSS file for custom styling

const Sidebar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="flex-md-column" style={{width:"15%"}}>
            <Container>
                <Navbar.Toggle aria-controls="sidebar-nav" />
                <Navbar.Collapse id="sidebar-nav">
                    <Nav className="flex-md-column">
                        {[...Array(8)].map((_, index) => (
                            <Nav.Link key={index} href={`#semestart${index + 1}`}>Semestart {index + 1}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Sidebar;
