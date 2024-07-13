import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './Sidebar.module.css';
import Forum from "./Forum"; // Import CSS file for custom styling
import usePostsAndLink from "../hooks/usePostsAndLink"

function Sidebar(props) {
    const {activeLink, posts, fetchData} = usePostsAndLink();

    return (
        <>
            <div style={{ display: 'flex', minHeight:"100vh" }}>
                <Navbar bg="dark" variant="dark" expand="md" className="flex-md-column">{/*style={{ width: "15%" }*/}
                    <Container>
                        <Navbar.Toggle aria-controls="sidebar-nav" />
                        <Navbar.Collapse id="sidebar-nav">
                            <Nav className="flex-md-column">
                                {Object.values(props.subjects).map(item => (
                                    <Nav.Link
                                        key={item.url}
                                        onClick={() => fetchData(item.id)}
                                        style={{ backgroundColor: activeLink === item.id ? 'lightblue' : '' }}
                                    >
                                        {item.name}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Forum posts={posts} subjectId={activeLink}></Forum>
            </div>
        </>
    );
}

export default Sidebar;
