import React from 'react'
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
                <Container fluid>
                    <Row>
                        <h1 bg="text-light" style={{ marginLeft: "10px" }}>
                            Bibliothèque
                        </h1>
                    </Row>
                    <Row>
                        <Nav className='ms-auto'>
                            <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
                            <Nav.Link as={NavLink} to="newbook">Ajouter un livre</Nav.Link>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Header