import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../componentsNew/Navigation/Navigation"
import CardComponent from "../componentsNew/Courses/CardComponent";
import React, { useEffect, useState } from "react";
import Top4Courses from "../componentsNew/Top4CoursesPerCat/Top4Courses";

export default function ChooseSubject() {

    const [category, setCategory] = useState(["programming"]);

    const [subjectObject, setSubjectObject] = useState([
        { description: "Advanced", selected: false, id: 0 },
        { description: "Artificial", selected: false, id: 1 },
        { description: "Web", selected: false, id: 2 },
        { description: "Math", selected: false, id: 3 },
    ]);

    function handleActiceCategory(category) {

        const updatedSubjectObject = subjectObject.map((subject) => {
            return {
                ...subject, 
                selected: subject.description.includes(category[0])
            };
        })

        // subjectObject.find(el => el.description.includes(category[0])).selected = true;
        // setSubjectObject(prevObj => ({
        //     ... prevObj,
        // }));
        setSubjectObject(updatedSubjectObject);
        setCategory(category);
    
    }

return (

    <>
        <div style={{ backgroundColor: '#DBD2CB' }}>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <Navigation />
            </div>
            <Container>
                <Row className="text-center mt-5">
                    <h1>Start Learning</h1>
                    <h5>Популарни курсеви од одредени области</h5>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row className="text-center">
                    <Col >
                        <p onClick={() => handleActiceCategory(["Advanced", "Databases", "Web Programming", "Advanced Web Design"])} className="btn"
                            style={{
                                borderBottom: subjectObject[0].selected ? '10px solid #814A35' : ''
                            }}
                        >Популарни курсеви</p>
                    </Col>
                    <Col >
                        <p onClick={() => handleActiceCategory(["Artificial", "Machine", "Agent"])} className="btn"
                            style={{
                                borderBottom: subjectObject[1].selected ? '10px solid #814A35' : ''
                            }}
                        >AI</p>
                    </Col>
                    <Col >
                        <p onClick={() => handleActiceCategory(["Web"])} className="btn"
                            style={{
                                borderBottom: subjectObject[2].selected ? '10px solid #814A35' : ''
                            }}
                        >Web Development</p>
                    </Col>
                    <Col >
                        <p onClick={() => handleActiceCategory(["Math"])} className="btn"
                            style={{
                                borderBottom: subjectObject[3].selected ? '10px solid #814A35' : ''
                            }}
                        >Останати</p>
                    </Col>
                </Row>
                <hr style={{ border: '1px solid black' }}></hr>
            </Container>
            <Container className="mt-4">
                <Row>

                    <Top4Courses
                        category={category}
                    />

                </Row>

                <Row className="mt-5 pb-5 text-center" style={{ placeContent: 'center' }}>
                    <a href="/select/subjectsAll" className="btn w-25">Види повеќе</a>
                </Row>
            </Container>

           {/* {Object.values(subjectObject)} */}
          
        </div>

    </>
);
}