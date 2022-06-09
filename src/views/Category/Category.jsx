//Importaciones
import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

//Exportacion de mi funcion "views" Category, encargada de 
// renderizar las diferentes categorias de productos
export default function Category() {
  //Aplicacion de un hook useParams, para recibir los diferentes id de la urlParams de categoria
  const { categoryId } = useParams();
  return (
    //Le paso por props a mi componente ItemListContainer los id obtenidos
    <div>
        <ItemListContainer categoryId={categoryId}/>
    </div>

  )
}
 