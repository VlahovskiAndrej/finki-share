import CardComponent from "../courses/CardComponent"
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import useSubjects from "../../hooks/useSubjects";


const Top4Courses = ({category}) => {
    const subjects = useSubjects();

    return (
        <Container className="mt-5">
                <Row>
                {Object.values(subjects)
                .filter(item => category.some(cat => item["subjectTitle"].includes(cat)))
                // .sort(() => Math.random() - 0.5)
                .slice(0,4)
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
export default Top4Courses;