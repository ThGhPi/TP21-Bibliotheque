import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const BookCard = (props) => {
  const [imgSrc, setImgSrc] = useState(props.thebook.couverture);
  const handleImgSrc = () => {
    if (!imgSrc.startsWith("http") && !imgSrc.startsWith("/images/couvertures/")) setImgSrc(imgSrc => "/images/couvertures/" + imgSrc);
    return imgSrc
  }

  
  return (
    <>
      <Card>
        <Card.Img src={handleImgSrc()} />
        <Card.Body>
          <Card.Title>{props.thebook.titre}</Card.Title>
          <p className='text-primary'>{props.thebook.auteur}</p>
          <p className='text-secondary'>{props.thebook.genre}</p>
          <p className='text-secondary fs-italic'>{props.thebook.date}</p>
          <p>{props.thebook.resume}</p>
          <Button variant='primary'>Modifier</Button>
          <Button variant='danger'>Supprimer</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default BookCard