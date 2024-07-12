import CardComponent from "../courses/CardComponent"
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import useSubjects from "../../hooks/useSubjects";

export default function AllCoursesCard({period, term}) {
    const subjects = useSubjects();
    console.log("PERIOD ", period)
    //TODO: filter by term
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