//Importaciones
import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

//Exportacion de mi funcion Home
export default function Home() {
  
  return (
    //Renderizado de mi pagina principal, donde llamo al componente ItemListContainer, donde me traera los productos
    <div className='home'>
      <h1 className='home__title'><span className='home__span__welcome'>Bievenidos a </span> <span className='home__span__name'>AsTecnologia</span> </h1>
      <ItemListContainer/>
    </div>
  )
}
