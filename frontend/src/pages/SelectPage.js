// import logo from './logo.svg';
import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import {Col, Row} from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import React, {useEffect, useState} from "react";
import "./SelectPage.module.css";
import {type} from "@testing-library/user-event/dist/type";

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

            <Row>
                {Object.values(subjects).map(item => (
                    <Col key={item.url} xs={12} sm={6} md={4} lg={3}>
                        <CardComponent
                            subject={item}
                        />
                    </Col>
                ))}
            </Row>

            {/*<Row>*/}
            {/*    {subjects.forEach(item => (*/}
            {/*        <Col key={item.url} xs={12} sm={6} md={4} lg={3}>*/}
            {/*            <CardComponent*/}
            {/*                subject={item}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*    ))}*/}
            {/*</Row>*/}

        </div>
    );
}

export default SelectPage;