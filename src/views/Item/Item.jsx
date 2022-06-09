//Importaciones
import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

//Exportacion de mi funcion "views" ProductId
export default function Item() {
  //Aplicacion del hook useParams, para recibir los id propios de cada producto 
  // que se le aplica en el urlParams
  const { itemId } = useParams();
  
  return (
    //Le paso por props a mi componente ItemDetailContainer los id obtenidos
    <div>
        <ItemDetailContainer itemId={+itemId}/>      
    </div>

  )
}
 