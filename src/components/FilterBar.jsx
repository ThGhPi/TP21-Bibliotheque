import React from 'react'
import { Row, Button } from 'react-bootstrap'

const FilterBar = () => {
    return (
        <>

            <Row>
                <Button variant='success'>Ajouter un livre</Button>
                <Button variant='info'>Filtrer</Button>
            </Row>
        </>
    )
}

export default FilterBar