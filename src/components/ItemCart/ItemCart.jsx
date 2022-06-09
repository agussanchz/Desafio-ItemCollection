import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext';

export default function ItemCart({item}) {
    const { removeFromCart } = React.useContext(CartContext)

    return (
        <div className='itemCart'>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Cantidad: {item.quantity}</Card.Text>
                    <Card.Text>Precio: {item.price}</Card.Text>
                    <Card.Text> Subtotal: {item.quantity * item.price}</Card.Text>
                    <Button variant="primary" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
