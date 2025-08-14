import React, { useEffect, useState } from 'react'
import { Container, Row, Button, Col, Form } from 'react-bootstrap'

const FilterBar = (props) => {
    const [filterButton, setFilterButton] = useState("Filtrer");
    const [filters, setFilters] = useState({ authorOrTitle: "", genre: "", year: "" });

    const handleFilterButton = () => {
        if (filterButton === "Filtrer") setFilterButton("Masquer les filtres");
        else setFilterButton("Filtrer");
    }
    const handleAuthorTitleChange = (e) => {
        setFilters({ ...filters, authorOrTitle: e.target.value });
        props.transmitFilterToBookList(filters);
    }
    const handleGenreChange = (e) => {
        if (e.target.value != "Tous les genres") {
            setFilters({ ...filters, genre: e.target.value });
        } else { setFilters({ ...filters, genre: "" }) }
        props.transmitFilterToBookList(filters);
    }
    const handleYearChange = (e) => {
        if (e.target.value != "Tous les années") {
            setFilters({ ...filters, year: e.target.value });
        } else { setFilters({ ...filters, year: "" }) }
        props.transmitFilterToBookList(filters);
    }
    const clearFilters = () => {
        setFilters({ authorOrTitle: "", genre: "", year: "" });
        props.transmitFilterToBookList(filters);
    }
    useEffect(() => {
        const timer  = setInterval(() => {}, 500);
        return () => clearInterval(timer);
    }, [filters])
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
                                        onChangeCapture={handleAuthorTitleChange} defaultValue="" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byGenreSearch'>Filtrer par genre</Form.Label>
                                    <Form.Select id='byGenreSearch' onChange={handleGenreChange} defaultValue="Tous les genres">
                                        <option>Tous les genres</option>
                                        {props.genresList.map((genre, index) => (<option key={index}>{genre}</option>))}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label htmlFor='byYearSearch'>Filtrer par année</Form.Label>
                                    <Form.Select id='byYearSearch' onChange={handleYearChange} defaultValue="" >
                                        <option>Toutes les années</option>
                                        {props.yearsList.map(year => (<option key={Number(year)}>{year}</option>))}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col md={3}>
                                <Button type='reset' variant='secondary' onClick={clearFilters}>Réinitialiser les filtres</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            )}
        </>
    )
}

export default FilterBar