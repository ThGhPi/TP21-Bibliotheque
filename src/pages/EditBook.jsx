import React from 'react'

const EditBook = () => {
    return (
        <>
            <Container className='bg-dark-subtle' fluid="xxl" style={{ padding: 0 }}>
                <Row>
                    <Col>
                        <h2 className='text-center my-3'>Modifier le livre</h2>
                        <BookForm buttonText={"Enregistrer les modifications"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditBook