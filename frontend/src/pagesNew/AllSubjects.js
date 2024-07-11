import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../componentsNew/Navigation/Navigation";
import SidebarComp from "../componentsNew/SidebarComp/SidebarComp";
import CardComponent from "../components/CardComponent";
import AllCoursesCard from "../componentsNew/AllCourses/AllCoursesCard";
import { useState } from "react";

export default function AllSubjects() {

    const [period, setPeriod] = useState(null);
    const [term, setTerm] = useState(null);

    function handlePeriodChange(periodType) {
        setPeriod(periodType);
    }

    function handleTermChange(termType) {
        setTerm(termType);
    }

    let context = (<h1>Сите предмети</h1>);

    if (period == null && term != null) {
        context = (<h1>Предмети од {term} семестар</h1>);
    }
    else if (period != null && term == null) {
        context = (<h1>Предмети од {period} семестар</h1>);
    }
    else if (period != null && term != null) {
        context = (<h1>Предмети од {term} семестар/ {period}</h1>);
    }


    return (
        <>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <div style={{ backgroundColor: '#DBD2CB' }}>
                    <Navigation />
                </div>
                <Row className="text-center mt-4">
                    {context}
                </Row>

                <Row>
                    
                </Row>
               
                <Row>
                    <SidebarComp
                        onPeriodClick={handlePeriodChange}
                        onTermClick={handleTermChange}
                    />
                    <Col>
                        <AllCoursesCard 
                        period = {period === "зимски" ? "W" : "S"} 
                        term = {term}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}