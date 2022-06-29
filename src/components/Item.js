import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Item1.css'


const Item = ({prod}) => {
    const {  nombre, precio, imagen } = prod
    return (
        <Card className='card2' style={{ width: '' }}>
            <Card.Img    variant="" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                  Precio:{'  '+precio}
                </Card.Text>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    )
  }

export default Item