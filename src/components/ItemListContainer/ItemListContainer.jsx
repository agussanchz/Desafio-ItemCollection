//Importaciones
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import { products } from "../../Data/productos";
import Loader from '../Loader/Loader';

// Exportacion de mi funcion ItemListContainer, encargada de recibir productos y aplicarles logica
export default function ItemListContainer({categoryId}) {
  //Hook useState para guardar mis productos en un estado
  const [items, setItems] = React.useState([]);

  //Hook para controlar el spinner loading
  const [loading, setLoading] = React.useState(true);
  //Aplicacion de useEffect para guardar los productos utilizando un filter y asi distinguir las categoryId
  React.useEffect(() => {
    
    if(categoryId){
      setTimeout(()=>{
        setLoading(false)
      },1000)
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setTimeout(()=>{
        setLoading(false)
      },1000)
      setItems(products);
    }
  },[categoryId, loading]) 

  return (
    //Le paso a traves de props, los productos obtenidos a mi componente ItemList
    <div className='item-container-list'>
      <Container>
        <Row>
          <Col>
              {loading ? (
                <Loader/>
              ) 
              : (
                <ItemList items={items}/>
              )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
 