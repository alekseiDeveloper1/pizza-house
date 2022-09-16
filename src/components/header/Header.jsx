import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Container>
                <Row >
                    <Col sm={10}>
                        <h1 className="logo">PIZZA-HOUSE</h1>
                    </Col>
                    <Col sm={2}>
                        <Nav className="header__nav">
                            <Nav.Item as="li">
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/add">Add card</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/cart">Cart</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;