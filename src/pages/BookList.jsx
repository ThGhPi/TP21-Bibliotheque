import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import axios, { Axios } from 'axios';

const BookList = () => {
    const [biblio, setBiblio] = useState(null);
    const [chargement, setChargement] = useState(false);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState(["", "", ""]);
    const [toBeFiltered, setToBeFiltered] = useState({ authorsAndTitles: [], genres: [], years: [] })

    const getAll = () => {
        setChargement(true);
        setError(null);

        axios.get("http://localhost:3000/books")
            .then(response => {
                let authorsAndTitlesList =[];
                let genresList =[];
                let yearsList =[];
                response.data.forEach(book => {
                    if (!authorsAndTitlesList.includes(book.titre)) authorsAndTitlesList.push(book.titre);
                    if (!authorsAndTitlesList.includes(book.auteur)) authorsAndTitlesList.push(book.auteur);
                    if (!genresList.includes(book.genre)) genresList.push(book.genre);
                    let bookDate = book.date.split("-");
                    if (!yearsList.includes(bookDate[0])) yearsList.push(bookDate[0]);
                    book.date = `${bookDate[2]}-${bookDate[1]}-${bookDate[0]}`
                });
                setToBeFiltered({ authorsAndTitles: authorsAndTitlesList, genres: genresList, years: yearsList })
                setBiblio([...response.data])
            })
            .catch(erreur => {
                console.log(erreur);
                setError("Erreur lors du chargement de la bibliothèque !")
            })
            .finally(() => { setChargement(false); });
    }

    const handleFilter = (dataFromFilterBar) => {
        return setFilter([...dataFromFilterBar])
    }

    useEffect(() => getAll(), []);
    return (
        <>
            <Container fluid="xxl" style={{ backgroundColor: "grey", padding: 0 }}>
                <FilterBar transmitFilterToBookList={handleFilter} genresList={toBeFiltered.genres} yearsList={toBeFiltered.years} />
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