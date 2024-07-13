import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../componentsNew/Navigation/Navigation";
import { ReactTyped } from "react-typed";
import Button from 'react-bootstrap/Button';
import HomePageCard from "../componentsNew/HomePageCard/HomePageCard";
import StudentOrganization from "../componentsNew/StudentsOrganization/StudentOrganization";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import FooterNew from "../componentsNew/FooterNew/FooterNew";
import ReactCardFlip from 'react-card-flip';
import Companies from "../componentsNew/Companies/Companies";




export default function HomePage() {

    const settings = {
        // className: "center",
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 4,
        // swipeToSlide: true,


        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        speed: 500
    };

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    function MouseOver(event) {
        event.target.style.transform = 'scaleY(1.1)';

    }

    function MouseOut(event) {
        event.target.style.transform = 'scaleY(1)';
    }
    return (
        <>
            <Navigation />
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col>
                        <Row className="h-25 d-inline-block py-5">
                            <h1>
                                <b>
                                    Страница за{" "}
                                    <ReactTyped
                                        strings={["споделување!", "коментари!", "дружба!"]}
                                        typeSpeed={100}
                                        loop
                                        backSpeed={20}
                                        cursorChar="|"
                                        showCursor={true}
                                    />
                                </b>
                            </h1>
                        </Row>
                        <Row className="h-25 d-inline-block mt-3">
                            <p>
                                Добредојдовте на нашиот форум! <br />
                                Регистрирајте се денес и бидете дел од динамичната образовна заедница!
                            </p>
                        </Row>
                        <Row className="w-25 d-inline-block mt-3">
                            <button
                                onMouseOver={MouseOver}
                                onMouseOut={MouseOut}
                                style={{ backgroundColor: '#814A35', border: 'none', borderRadius: '40em', color: 'white' }}>Види повеќе</button>
                        </Row>
                    </Col>
                    <Col >
                        <Image
                            className="mr-3"
                            src="/images/homepage/3d-illustration-smiling-happy-man-600nw-1740135179.webp" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="d-flex align-items-center justify-content-center">

                    <Col >
                        <Image
                            src="/images/homepage/retro-computer-desk-arrangement-removebg-preview.png" />
                    </Col>
                    <Col>
                        <Row className="h-25 d-inline-block py-5">
                            <h1>
                                <b>
                                    Креирај си го сам
                                    својот работен простор!
                                </b>
                            </h1>
                        </Row>
                        <Row className="h-25 d-inline-block mt-3">
                            <p>
                                Избери предмети, види ја магијата

                            </p>
                        </Row>
                        <Row className="w-25 mt-3">
                            <button
                                onMouseOver={MouseOver}
                                onMouseOut={MouseOut}
                                style={{ backgroundColor: '#814A35', border: 'none', borderRadius: '40em', color: 'white' }}>Започни</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container style={{ minWidth: '100%', backgroundColor: '#DBD2CB' }}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Image
                            style={{ width: '40%' }}
                            src="/images/homepage/40-removebg-preview.png"></Image>
                    </Row>
                    <Container style={{ textAlign: 'center', height: '250px', width: '1500px', backgroundColor: '#CDC1B6' }}>
                        <h2>Дел од нашите услуги</h2>
                    </Container>
                    <Row className="justify-content-md-center">
                        <Col style={{ textAlign: '-webkit-center', position: 'relative', bottom: '140px' }}>

                            <HomePageCard
                                imgUrl='/images/homepage/chat-message-notification-icon-isolated-3d-render-illustration_47987-9678-removebg-preview.png'
                                mainText='Форум'
                                subText='изразување на различни ставови и мислења за даден предмет, 
                       поттикнувајќи интеракција и дијалог.'
                            ></HomePageCard>
                        </Col>
                        <Col style={{ textAlign: '-webkit-center', position: 'relative', bottom: '140px' }}>
                            <HomePageCard
                                imgUrl='/images/homepage/infographic-elements-three-dimensional-icon_23-2149740214-removebg-preview.png'
                                mainText='Одговор на ваше прашање'
                                subText='На секое ваше прашање следува релевантен одговор од самите студенти'
                            ></HomePageCard>
                        </Col>
                        <Col style={{ textAlign: '-webkit-center', position: 'relative', bottom: '140px' }}>
                            <HomePageCard
                                imgUrl='/images/homepage/cropped.png'
                                mainText='Точност на информација'
                                subText='Со помош на upvote ќе може да видите колку е релевантна информацијата'
                            ></HomePageCard>
                        </Col>
                    </Row>
                </Container>

                <br></br>
                <Container>
                    <br></br>
                    <Row className="text-center">
                        <h2>Запознајте се со нашите студентски организации</h2>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <StudentOrganization
                                imgPath='/images/studentorg/st_org_best_logo.png'
                                organizationName='BEST'
                            ></StudentOrganization>
                        </Col>
                        <Col>
                            <StudentOrganization
                                imgPath='/images/studentorg/st_org_iaeste_logo.png'
                                organizationName='IAESTE'></StudentOrganization>
                        </Col>
                        <StudentOrganization
                            imgPath='/images/studentorg/eestec-removebg-preview.png'
                            organizationName='EESTEC'></StudentOrganization>
                    </Row>
                    <br></br>
                </Container>
                <br></br>
                <Row className="text-center">
                    <h2>Огласи за пракса</h2>
                </Row>
                <br></br>
                <Container style={{ minWidth: '99%' }}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                {/* <Companies
                                    imgPath='/images/companies/codechem.png'
                                    organizationName='CodeChem'
                                    content = 'ALAAAAAH'
                                >
                                </Companies>
                            </div> */}
                           
                            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div>
                                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div>
                                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div>
                                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div>
                                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <div>
                                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                                    <div onClick={flipCard}>
                                        <StudentOrganization
                                            imgPath='/images/companies/codechem.png'
                                            organizationName='CodeChem'></StudentOrganization>
                                    </div>
                                    <div onClick={flipCard}>

                                        <StudentOrganization
                                            imgPath='/images/companies/it_labs.png'
                                            organizationName='IT Labs'
                                        ></StudentOrganization>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        </Slider>
                    </div>
                </Container>
                <FooterNew></FooterNew>
            </Container>

        </>
    );
}

