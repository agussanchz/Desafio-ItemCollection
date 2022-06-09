//Importaciones
import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

//Exportacion de mi funcion "views" Products, encargada de
// renderizar mi lista de productos
export default function Products() {
  return (
    <div className='Products'>
      <h2 className='title__products'>Lista de productos</h2>
      <ItemListContainer/>
    </div>
  )
}
