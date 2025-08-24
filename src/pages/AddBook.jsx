import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookForm from '../components/BookForm';

const AddBook = () => {
    return (
        <>
            <Container className='bg-dark-subtle' fluid="xxl" style={{ padding: 0 }}>
                <Row>
                    <Col>
                        <h2 className='text-center my-3'>Ajouter un nouveau livre</h2>
                        <BookForm buttonText={"Ajouter le livre"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddBook