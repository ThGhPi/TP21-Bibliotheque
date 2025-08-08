import React from 'react'
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-light" style={{ marginLeft: "10px", fontSize: "2rem" }}>
                                Bibliothèque
                            </h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Container>
                            <Nav className='ms-auto justify-content-start'>
                                <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
                                <Nav.Link as={NavLink} to="newbook">Ajouter un livre</Nav.Link>
                            </Nav>
                        </Container>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Header