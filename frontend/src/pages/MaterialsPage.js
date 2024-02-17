import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
// import logo from './logo.svg';
import Home from "../components/Home";
import {Col, Row} from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import React, {useEffect, useState} from "react";
import "./SelectPage.module.css";
import {type} from "@testing-library/user-event/dist/type";

function MaterialsPage() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/subjects/taken';
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
            <Sidebar subjects={subjects}></Sidebar>
        </div>
    );
}

export default MaterialsPage;