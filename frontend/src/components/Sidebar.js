import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap';
import './Sidebar.module.css';
import CardComponent from "./CardComponent";
import Forum from "./Forum"; // Import CSS file for custom styling

// function Sidebar(props){
//
//     const [posts, setPosts] = useState([]);
//
//     const fetchData = (id) => {
//         const url = 'http://localhost:8080/posts/' + id;
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setPosts(data);
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     };
//
//     return (
//         <>
//             <div style={{ display: 'flex' }}>
//                 <Navbar bg="dark" variant="dark" expand="md" className="flex-md-column" style={{ width: "15%" }}>
//                     <Container>
//                         <Navbar.Toggle aria-controls="sidebar-nav" />
//                         <Navbar.Collapse id="sidebar-nav">
//                             <Nav className="flex-md-column">
//                                 {Object.values(props.subjects).map(item => (
//                                     <Nav.Link key={item.url} onClick={() => fetchData(item.id)}>{item.name}</Nav.Link>
//                                 ))}
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//                 <Forum posts={posts}></Forum>
//             </div>
//         </>
//
//     );
// }
function Sidebar(props) {
    const [activeLink, setActiveLink] = useState(null);
    const [posts, setPosts] = useState([]);

    const fetchData = (id) => {
        const url = 'http://localhost:8080/posts/' + id;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPosts(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        setActiveLink(id); // Update active link
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
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
                <Forum posts={posts}></Forum>
            </div>
        </>
    );
}

export default Sidebar;
