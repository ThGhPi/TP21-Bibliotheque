import React, { useState } from 'react'
import { Container, Row, Button, Col, Form } from 'react-bootstrap'

const FilterBar = () => {
    const [filter, setFilter] = useState([]);
    const [filterButton, setFilterButton] = useState("Filtrer")

    const handleFilterButton = () => {
        if (filterButton === "Filtrer") setFilterButton("Masquer les filtres");
        else setFilterButton("Filtrer")
    }
    return (
        <>

            <Row className='pt-2 text-center'>
                <Col md={2}>
                    <Button variant='success'>Ajouter un livre</Button>
                </Col>
                <Col md={2}>
                    <Button variant='info' onClick={handleFilterButton}>{filterButton}</Button>
                </Col>
            </Row>
            {filterButton != "Filtrer" && (
                <Form className='bg-white p-2 my-2'>
                    <Container fluid>
                        <Row>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='titleAuthorSearch'>Recherche</Form.Label>
                                    <Form.Control type="text" id='titleAuthorSearch' placeholder="rechercher par titre ou auteur" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byGenreSearch'>Filtrer par genre</Form.Label>
                                    <Form.Select id='byGenreSearch'>

                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byYearSearch'>Filtrer par année</Form.Label>
                                    <Form.Select id='byYearSearch'>

                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col md={3}>
                                <Button variant='secondary'>Réinitialiser les filtres</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            )}
        </>
    )
}

export default FilterBar