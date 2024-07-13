import CardComponent from "../Courses/CardComponent"
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AllCoursesCard({period, term}) {
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {
        const url = 'http://localhost:8080/subjects';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setSubjects(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Container className="mt-5">
           
        <Row>
        {Object.values(subjects)
        .filter(item => item.code.includes(period))
        .map(item => (
            <Col key={item.url} xs={12} sm={6} md={4} lg={3}>
               
                <CardComponent
                    subject={item}
                />
            </Col>
        ))}
    </Row>
        </Container>
    );
}