// import logo from './logo.svg';
import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import {Col, Row} from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import {useEffect, useState} from "react";
import "./SelectPage.module.css";

function SelectPage() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/subjects';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSubjects(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            {/* Render subjects in a grid */}
            <Row>
                {subjects.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <CardComponent
                            title={item.name}
                            description={item.details}
                            term={item.term}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );

    // return (
    //
    //     <div className="App">
    //
    //         <NavigationBar></NavigationBar>
    //         <div className="container">
    //             <h2>Семестар 1</h2>
    //             <Row>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Компјутерски мрежи"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //             </Row><br/>
    //             <Row>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //             </Row><hr/>
    //             <h2>Семестар 2</h2>
    //             <Row>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //             </Row><br/>
    //             <Row>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //                 <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>
    //             </Row>
    //
    //         </div>
    //     </div>
    // );
}

export default SelectPage;