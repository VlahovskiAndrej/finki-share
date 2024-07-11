import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function FooterNew() {
    function handleHover(event) {

        event.target.style.transition = 'all .35s ease';
        event.target.style.transform = 'scale(.9)';
        event.target.style.filter = 'grayscale(100%) contrast(120%)';
    }

    function handleHoverEnd(event) {

        event.target.style.transform = 'scale(1)';

    }


    return (
        <>
            <Row className="gx-0 mt-5">
                <Col className="">
                    <hr
                        className="ms-7"
                        style={{
                            maxWidth: "100%",
                            marginTop: "5%",
                            border: "1px solid white",
                            opacity: "1",
                        }}
                    />
                </Col>
                <Col className="col-auto">
                    <Row className="mx-auto">
                        <Col className="col-auto">
                            <FaFacebook onMouseOver={handleHover} onMouseOut={handleHoverEnd} color="white" size="3.5em" onClick={() => window.location = "https://www.facebook.com/"} />
                        </Col>
                        <Col className="col-auto">
                            <FaInstagram onMouseOver={handleHover} onMouseOut={handleHoverEnd} color="white" size="3.5em" />
                        </Col>
                        <Col className="col-auto">
                            <AiFillTwitterCircle onMouseOver={handleHover} onMouseOut={handleHoverEnd} color="white" size="3.5em" />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <hr
                        className="me-7"
                        style={{
                            maxWidth: "100%",
                            marginTop: "5%",
                            border: "1px solid white",
                            opacity: "1",
                        }}
                    />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h1
                        style={{
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "sans-serif !important",
                            fontSize: "3.5rem",
                            lineHeight: "3rem",
                            textDecoration: "bold",
                            textAlign: "center"
                        }}
                    >
                        FINKI<br></br>Share
                    </h1>
                </Col>
                <Col>
                    <h1
                        style={{
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "sans-serif !important",
                            fontSize: "3.5rem",
                            lineHeight: "3rem",
                            textDecoration: "bold",
                            textAlign: "center"
                        }}
                    >
                        Links
                    </h1>
                    <br></br>
                    <Container className="mx-auto w-50" style={{ color: "white" }}>
                    <h5 className="text-center" style={{fontFamily: 'sans-serif' }}>LeetCode</h5>
                    <h5 className="text-center" style={{fontFamily: 'sans-serif' }}>GitHub</h5>
                    <h5 className="text-center" style={{fontFamily: 'sans-serif' }}>FINKI</h5>
                    <h5 className="text-center" style={{fontFamily: 'sans-serif' }}>Discord</h5>
                    </Container>
                </Col>

                <Col>
                    <Container className="mx-auto w-50" style={{ color: "white" }}>
                        <h5 className="text-start" style={{ textAlign: "center", fontFamily: 'sans-serif' }}>ABOUT US</h5>
                        <h5 className="text-start" style={{ textAlign: "center", fontFamily: 'sans-serif' }}>REPORT A BUG</h5>

                    </Container>
                </Col>
            </Row>
        </>
    );
};
