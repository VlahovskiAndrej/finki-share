import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar(){
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
                        <Nav.Link href="/login"  style={{color: 'black'}}>Најави се</Nav.Link>
                        {/*<NavDropdown  title="Dropdown" id="basic-nav-dropdown" style={{ color: 'black' }}>*/}
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