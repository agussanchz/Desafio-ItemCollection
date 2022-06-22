import React from 'react'
import { Link } from 'react-router-dom' 
import ItemCart from '../../components/ItemCart/ItemCart'
import { CartContext } from '../../context/CartContext'
import { addDoc, getFirestore, collection } from 'firebase/firestore'

export default function Cart() {

  const { cart, totalPrice } = React.useContext(CartContext)

  const order = {
    buyer: {
      name: "Agustin",
      email: "agustin@gmail.com",
      phone: "356578966",
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersColecction = collection(db,'orders');
    addDoc(ordersColecction, order)
    .then(({ id }) => console.log(id))

  }


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
        <button onClick={handleClick}>Emitir Compra</button>
    </div>
  )
}
