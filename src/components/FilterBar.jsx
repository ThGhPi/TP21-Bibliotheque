import React, { useState } from 'react'
import { Container, Row, Button, Col, Form } from 'react-bootstrap'

const FilterBar = (props) => {
    const [filters, setFilters] = useState({authorOrTitle: "", genre: "", year: ""});
    const [filterButton, setFilterButton] = useState("Filtrer");

    const handleFilterButton = () => {
        if (filterButton === "Filtrer") setFilterButton("Masquer les filtres");
        else setFilterButton("Filtrer")
    }

    const handleAuthorTitleChange = () => {
        setFilters({...filters, authorOrTitle: e.target.value})
    }
    const handleGenreChange = () => {
        setFilters({...filters, genre: e.target.value})
    }
    const handleYearChange = () => {
        setFilters({...filters, year: e.target.value})
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
                                    <Form.Control type="text" id='titleAuthorSearch' placeholder="rechercher par titre ou auteur"
                                        onChangeCapture={handleAuthorTitleChange} defaultValue={""}/>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byGenreSearch'>Filtrer par genre</Form.Label>
                                    <Form.Select id='byGenreSearch' onChange={handleGenreChange} defaultValue={""}>
                                        <option>Tous les genres</option>
                                        {props.genresList.map((genre,index) => ( <option key={index} value={genre}>{genre}</option>))}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byYearSearch'>Filtrer par année</Form.Label>
                                    <Form.Select id='byYearSearch' onChange={handleYearChange} defaultValue={""}>
                                        <option>Toutes les années</option>
                                        {props.yearsList.map(year => ( <option key={Number(year)} value={year}>{year}</option>))}
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