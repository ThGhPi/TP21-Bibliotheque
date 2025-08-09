import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import axios, { Axios } from 'axios';

const BookList = () => {
    const [biblio, setBiblio] = useState(null);
    const [chargement, setChargement] = useState(false);
    const [error, setError] = useState(null);

    const getAll = () => {
        setChargement(true);
        setError(null);

        axios.get("http://localhost:3000/books")
            .then(response => { setBiblio(response.data) })
            .catch(erreur => {
                console.log(erreur);
                setError("Erreur lors du chargement de la bibliothèque !")
            })
            .finally(() => setChargement(false));
    }

    useEffect(() => getAll(), []);
    return (
        <>
            <Container fluid="xxl" style={{backgroundColor: "grey", padding: 0}}>
                <FilterBar />
                <Row className='px-2'>
                    {chargement && (
                        <div className='spinner-container'>
                            <div className='spinner'></div>
                            <p>Chargement ...</p>
                        </div>
                    )}
                    {error && (<p className='fw-bold'>{error}</p>)}
                    {biblio && !chargement && !error && biblio.map(book => (
                            <Col md={3} key={book.id} className='my-2'>
                                <BookCard thebook={book} id={book.id} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    )
}

export default BookList