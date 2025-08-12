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
      <Card className="p-0" style={{ width: "100%", height: "100%", maxWidth: "275px", border: "none", margin: "0 auto" }}>
        <Card.Img variant='top' style={{ width: "100%", maxHeight: "200px", padding: "0" }}
          src={handleImgSrc()} alt={('Première de couverture de ' + props.thebook.titre)} />
        <Card.Body className="px-2 pt-2" style={{ paddingBottom: "auto" }}>
          <Card.Title>{props.thebook.titre}</Card.Title>
          <Card.Text className='text-primary'>{props.thebook.auteur}</Card.Text>
          <Card.Text className='text-secondary'>{props.thebook.genre}</Card.Text>
          <Card.Text className='text-secondary fs-italic'>{props.thebook.date}</Card.Text>
          <Card.Text>{props.thebook.resume}</Card.Text>
        </Card.Body>
        <Card.Body className='text-center justify-self-bottom p-1'>
          <Button variant='primary'>Modifier</Button>
          <Button variant='danger'>Supprimer</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default BookCard