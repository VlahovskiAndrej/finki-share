import CardComponent from "../courses/CardComponent"
import React from "react";
import {Col, Row} from "react-bootstrap";
import useSubjects from "../../hooks/useSubjects";

const filterByAcademicYearAndSemester = (subject, semester, academicYear) => {
    if (semester != null && academicYear != null) {
        return subject.academicYearAndSemester.includes(semester) && subject.academicYearAndSemester.includes(academicYear);
    }
    if (semester != null) {
        return subject.academicYearAndSemester.includes(semester);
    }
    if (academicYear != null) {
        return subject.academicYearAndSemester.includes(academicYear);
    }

    return true;
};

const AllCoursesCard = ({semester, academicYear}) => {
    const subjects = useSubjects();

    return (
        <Row>
            {Object.values(subjects)
                .filter(subject => filterByAcademicYearAndSemester(subject, semester, academicYear))
                .map(subject => (
                    <Col key={subject.url} xs={12} sm={6} md={4} lg={3}>
                        <CardComponent
                            subject={subject}
                        />
                    </Col>
                ))}
        </Row>
    );
}

export default AllCoursesCard;