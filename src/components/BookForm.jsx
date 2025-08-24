import React from 'react'
import {  Button, Form } from 'react-bootstrap'

const BookForm = (props) => {
  const handleSubmit = () => {}

  return (
    <>
      <Form className='mx-auto rounded-3 p-3 bg-secondary' style={{ maxWidth: "400px "}}>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>Titre *</Form.Label>
          <Form.Control type="text" />
          {(<Form.Text className='text-danger'>Le titre est requis</Form.Text>)}
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>Auteur *</Form.Label>
          <Form.Control type="text" />
          {(<Form.Text className='text-danger'>L'auteur est requis</Form.Text>)}
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>Genre *</Form.Label>
          <Form.Control type="text" />
          {(<Form.Text className='text-danger'>Le genre est requis</Form.Text>)}
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>Date de publication *</Form.Label>
          <Form.Control type="date" />
          {(<Form.Text className='text-danger'>La date de publication est requis</Form.Text>)}
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>URL de la couverture</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label className='fw-bold'>Résumé *</Form.Label>
          <Form.Control type="textarea" />
          {(<Form.Text className='text-danger'>Le résumé est requis</Form.Text>)}
        </Form.Group>
        <Button variant='success' className='text-center' type='submit' onClick={handleSubmit}>{props.buttonText}</Button>
      </Form>
    </>
  )
}

export default BookForm