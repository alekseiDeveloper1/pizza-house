import React from 'react';
import Header from "../components/header/Header";
import {Col, Container, Row} from "react-bootstrap";
import NavBar from "../components/nav-bar/NavBar";
import Cards from "../components/cards/Cards";

const Home = () => {
    return (
        <>
            <Header/>
            <div className="main mt-5">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <NavBar />
                        </Col>
                        <Col sm={9}>
                            <Cards />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;