import React from 'react'
import { Link } from 'react-router-dom' 
import ItemCart from '../../components/ItemCart/ItemCart'
import { CartContext } from '../../context/CartContext'

export default function Cart() {

  const { cart, totalPrice } = React.useContext(CartContext)

  if (cart.length === 0){
    return (
      <div className='cart-vacio'>
        <h2 className='title__carrito'>Tu carrito esta vacio :(</h2>

        <div className='container-cart'>
          <Link className='nav__link'to={'/products'}>
            <input type="button" value="Comprar productos"/>
          </Link>
        </div> 
      </div>
    )
  }

  return (
    <div>
        {
          cart.map(product => <ItemCart key={product.id} item={product}/>)
        }
        <p className='totalPrice'>
          Total de su compra: ${totalPrice()}
        </p>
    </div>
  )
}
