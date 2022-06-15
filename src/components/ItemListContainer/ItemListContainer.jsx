//Importaciones
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader';
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

// Exportacion de mi funcion ItemListContainer, encargada de recibir productos y aplicarles logica
export default function ItemListContainer({categoryId}) {
  //Hook useState para guardar mis productos en un estado
  const [items, setItems] = React.useState([]);

  //Hook para controlar el spinner loading
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() =>{

    const db = getFirestore();


    if(categoryId){
      const q = query(collection(db,"productos"), where("category_id", "==", categoryId))
      getDocs(q).then(snapshot => {
        
        setTimeout(()=>{
          setLoading(false)
        },1000)

        if(snapshot.size === 0){
          console.log("no hay productos")
        }
        
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })
    }
    else{
      const productsRef = collection(db,"productos")
      getDocs(productsRef).then(snapshot => {

        setTimeout(()=>{
          setLoading(false)
        },1000)

        if(snapshot.size === 0){
          console.log("no hay productos")
        }
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      })
    }
  },[categoryId])


  return (
    //Le paso a traves de props, los productos obtenidos a mi componente ItemList
    <div className='item-container-list'>
      <Container className='container'>
        <Row className='row'>
          <Col className='col'>
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
 