import React from 'react'

const CartContext = React.createContext()
const {Provider} = CartContext
 

const CartProvider = ({children}) => {

  const [cart, setCart] = React.useState([])
  console.log(cart)

  //agregar al carrito
  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: + count}])
    }
  }

  //Eliminar del carrito
  const removeFromCart = (id) => {
    const newCart = cart.filter((carItem) => carItem.id !== id);
    setCart(newCart)
  }

  //Vaciar todo el carrito
  const deleteAll = () => {
    setCart([])
  }

  //Se encuentra en el carrito
  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }

  //Precio total
  const totalPrice = () => {
    return cart.reduce((acumuladorPrice, actualPrice) => acumuladorPrice + actualPrice.quantity * actualPrice.price,0)
  }

  //Total de productos
  const totalProducts = () => cart.reduce((acumulador, productActual) => acumulador + productActual.quantity, 0)

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      totalPrice,
      totalProducts,
      cart
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}