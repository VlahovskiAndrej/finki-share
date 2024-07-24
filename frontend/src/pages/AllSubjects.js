import {Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import SidebarSubjects from "../components/sidebar-comp/SidebarSubjects";
import AllCoursesCard from "../components/all-courses/AllCoursesCard";
import React, {useState} from "react";

const AllSubjects = () => {

    const [semester, setSemester] = useState(null);
    const [academicYear, setAcademicYear] = useState(null);

    const handleSemesterChange = (periodType) => {
        setSemester(periodType);
    }

    const handleAcademicYearChange = (termType) => {
        setAcademicYear(termType);
    }

    const checkTermAndPeriod = (semester, academicYear) => {
        if (semester == null && academicYear != null) {
            return <h1>Предмети од {academicYear} година</h1>;
        } else if (semester != null && academicYear == null) {
            return <h1>Предмети од {semester} семестар</h1>;
        } else if (semester != null && academicYear != null) {
            return <h1>Предмети од {academicYear} година/ {semester}</h1>
        }
    }
    return (
        <>
            <div style={{backgroundColor: '#DBD2CB'}}>
                <Navigation
                    isNavigationWhite={false}
                />
                <div style={{display: 'flex', minHeight: "100vh"}}>
                    <SidebarSubjects
                        onSemesterClick={handleSemesterChange}
                        onAcademicYearClick={handleAcademicYearChange}
                    />
                    <Container className="mt-3">
                        <Row className="text-center mt-4">
                            <h1>{(semester == null && academicYear == null) ? `Сите предмети` : checkTermAndPeriod(semester, academicYear)}</h1>
                        </Row>
                        <AllCoursesCard
                            semester={semester}
                            academicYear={academicYear}
                        />
                    </Container>
                </div>
            </div>
        </>
    );
}
export default AllSubjects;