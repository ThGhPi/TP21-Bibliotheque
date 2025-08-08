import React from 'react'
import { Row, Button, Col} from 'react-bootstrap'

const FilterBar = () => {
    return (
        <>

            <Row className='pt-2' className="text-center">
                <Col md={2}>
                    <Button variant='success'>Ajouter un livre</Button>
                </Col>
                <Col md={2}>
                    <Button variant='info'>Filtrer</Button>
                </Col>
            </Row>
        </>
    )
}

export default FilterBar