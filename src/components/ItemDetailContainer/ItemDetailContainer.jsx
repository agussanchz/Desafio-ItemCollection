//Importaciones
import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row, Col } from 'react-bootstrap';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

//Exportacion de mi funcion ItemDetailContainer, que se encarga de recibir por props
// el id de un producto especifico. Luego, al item recibido lo pasa a traves de props al 
// componente ItemDetail
export default function ItemDetailContainer({itemId}) {
  //Creacion de un hook useState, para guardar productos
  const [item, setItem] = React.useState([]);
  //Creacion de un hook useEffect, para aplicar un metodo de arrays find y seleccionar el item que tenga
  //el mismo id que el valor recibido por props
  React.useEffect(() => {
    const db = getFirestore()

    const productRef = doc(db,"productos", itemId);
    
    getDoc(productRef).then((snapshot) => {
      if(snapshot.exists()){
        setItem({id: snapshot.id, ...snapshot.data()})
      }
    })
  }, [itemId]);

  return (
    //Le paso por props a mi componente ItemDetail los productos obtenidos
    <div className='item-container-detail'>
      <Container>
        <Row>
          <Col>
              <ItemDetail item={item}/>
          </Col>
        </Row>
      </Container>

    </div>

  )
}
