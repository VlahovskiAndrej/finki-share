import CardComponent from "../Courses/CardComponent"
import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";



export default function Top4Courses({category}){


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

     
        <Container className="mt-5">
                <Row>
                {Object.values(subjects)
                .filter(item => category.some(cat => item["subjectTitle"].includes(cat)))
                // .sort(() => Math.random() - 0.5)
                .slice(0,4)
                .map(item => (
                    <Col key={item.url} xs={12} sm={6} md={4} lg={3}>
                        {console.log({category})}
                        <CardComponent
                            subject={item}
                        />
                    </Col>
                ))}
            </Row>
                </Container>
    );
}